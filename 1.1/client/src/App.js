import './App.css';
import Login from './Login'
import Player from './Player'
import React, { useEffect, useState } from 'react'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token // the variable is named _token to distinguish from the use state 'token' variable

    // Clear url of token
    window.location.hash = ""

    if(_token){
    
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => { 
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {

        // Loads all playlist information and inserts into data layer
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })

        // Maps playlist names to their ids
        const temp_playlist_map = {};

        for (const playlist of playlists.items) {
          spotify.getPlaylist(playlist.id).then(response => {
            temp_playlist_map[response.name] = playlist.id
          })
        }

        // Sends playlist name/id map to data layer
        dispatch({
          type: "SET_PLAYLIST_MAP",
          playlist_map: temp_playlist_map,
        })

      })
      
      spotify.getPlaylist('4AfQl23I1AiZFljdtiIkqn').then(response => {
        dispatch({
          type: "SET_CURRENT_PLAYLIST",
          current_playlist: response,
        })
      })

    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
