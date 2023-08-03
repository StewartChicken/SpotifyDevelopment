import React from 'react'

const client_id = 'ca63353e4ef242f2b3c7b9d843d0de1e'
const response_type = 'code'
const redirect_uri = 'http://localhost:3000'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}
                    &scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify
                    %20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <div>
        <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  )
}
