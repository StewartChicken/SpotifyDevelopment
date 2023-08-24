import React from 'react'
import "./SidebarOption.css"
import { useDataLayerValue } from './DataLayer';

function SidebarOption( { title, Icon, spotify } ) {
  const [{ current_playlist, playlist_map }, dispatch] = useDataLayerValue()

  const handlePlaylistClick = () => {
    spotify.getPlaylist(playlist_map[title]).then(response => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: response,
      })
    })
  }

  return (
    <div className="sidebarOption">

        {Icon ? // Top options : Home, Search, Library
        (
        <div className="sidebarFunctions">
          <Icon className="sidebarOption_icon"/>
          <h4>{title}</h4>
        </div>
        ) : (

          <button onClick={handlePlaylistClick}>{title}</button> // Playlist buttons

        )}

    </div>
  )
}

export default SidebarOption