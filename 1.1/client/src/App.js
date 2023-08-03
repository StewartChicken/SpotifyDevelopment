import './App.css';
import Login from './Login'
import Player from './Player'
import React, { useEffect, useState } from 'react'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)
  const [{}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token // the variable is named _token to distinguish from the use state 'token' variable

    // Clear url of token
    window.location.hash = ""

    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)
      })
    }

  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
