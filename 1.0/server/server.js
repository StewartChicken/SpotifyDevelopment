const express = require('express')
const server = express()
const axios = require('axios')
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')

server.use(cors())

const port = 5000

// App info - will put in ENV file later
const clientID = 'ca63353e4ef242f2b3c7b9d843d0de1e'
const clientSecret = '1db74f52afb54716b555d0ff1a8fc62'
const redirectUri = `https://localhost:${port}`
const state = 'some-state'

const scopes = ['ugc-image-upload', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'app-remote-control', 'streaming', 
  				'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public', 'user-follow-modify', 'user-follow-read',
				'user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-library-modify', 'user-library-read']

const spotifyApi = new SpotifyWebApi({
	clientId: clientID,
	clientSecret: clientSecret,
	redirectUri: redirectUri
})

// Hard coded URI (temporary) - will pull parameters from ENV file later
const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}}&response_type=code&redirect_uri=${redirectUri}&scope=ugc-image-upload
%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20app-remote-control%20streaming%20playlist-read-private%20
playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20user-follow-modify%20user-follow-read%20user-read-playback-position
%20user-top-read%20user-read-recently-played%20user-library-modify%20user-library-read&state=some-state`

server.get('/', (req, res) => {
	res.send('This is the home page')
})

server.get('/get-auth-url', (req, res) => {
	res.send(authURL)
})

const getAccessToken = () => {

}

const start = () => {
	
	server.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})
}

start()