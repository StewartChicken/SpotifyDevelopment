const express = require('express')
const server = express()
const axios = require('axios')
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')

server.use(cors())

const port = 5000

// App info - will put in ENV file later
const clientID = 'ca63353e4ef242f2b3c7b9d843d0de1e'
const clientSecret = '1db74f52afb54716b555d0ff1a8f4c62'
const redirectUri = `http://localhost:3000`
const state = 'some-state'
const showDialog = false

const spotifyApi = new SpotifyWebApi({
	clientId: clientID,
	clientSecret: clientSecret,
	redirectUri: redirectUri
})

// User scopes - information to be received form Spotify
const scopes = ['ugc-image-upload', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 
  				'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public', 'user-follow-modify', 'user-follow-read',
				'user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-library-modify', 'user-library-read']

// Hard coded URI (temporary) - will pull parameters from ENV file later
const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&show_dialog=${showDialog}&scope=ugc-image-upload
%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20streaming%20playlist-read-private%20
playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-follow-modify%20user-follow-read%20user-read-playback-position
%20user-top-read%20user-read-recently-played%20user-library-modify%20user-library-read&state=some-state`

// SpotifyAPI wrapper function to generate a new URL given the scopes and state
//const authURL = spotifyApi.createAuthorizeURL(scopes, state);

server.get('/', (req, res) => {
	res.send('This is the home page')
})

server.get('/get-auth-url', (req, res) => {
	res.send(authURL)
})

server.post('/login', (req, res) => {
	const code = req.body.code

	spotifyApi.authorizationCodeGrant(code).then(data => {
		res.json({
			access_token: data.body.access_token,
            refresh_token: data.body.refresh_token,
			expires_in: data.body.expires_in
		})
	}).catch((error) => {
		console.log('--- Error when getting access token ---')
		console.log(error)
		res.sendStatus(400)
	})
})

const start = () => {
	
	server.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})
}

// Start the server
start()