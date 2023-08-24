import React, { useState } from 'react'
import "./Body.css"
import Header from "./Header"
import SongRow from "./SongRow"
import { useDataLayerValue } from './DataLayer';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';

function Body({ spotify }) {
  const[{ current_playlist, playlists }, dispatch] = useDataLayerValue();

  const [deleteSelected, setDeleteSelected] = useState(false); // Toggle button appearance when selected

  const handleDeleteClick = () => {
    setDeleteSelected(!deleteSelected);
  }

  return (
    <div className="body">
        <Header spotify={spotify}/>

        <div className="body_info">
          <img src={current_playlist?.images[0]?.url} alt=""/>

          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>{current_playlist?.name}</h2>
            <p>{current_playlist?.description}</p>
          </div>
        </div>

        <div className="body_songs">
          <div className="body_icon_container">

            <IconButton onClick={handleDeleteClick} disableRipple>
              <DeleteIcon className={deleteSelected ? "body_selected_delete_icon" : "body_delete_icon"}/>
            </IconButton>

            <FavoriteIcon className="body_icon"/>
            <MoreHorizIcon className="body_icon"/>
          </div>

          {current_playlist?.tracks.items.map(item => (
            <SongRow key={item.track.id} track={item.track} />
          ))}

        </div>
    </div>
  )
}

//<PlayCircleFilledIcon className="body_shuffle"/>

export default Body