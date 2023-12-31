import React, {useEffect} from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar({ spotify }) {
  const [{ playlists, playlist_map }, dispatch] = useDataLayerValue()

  console.log("Playlist map: ", playlist_map)

  return (
    <div className="sidebar">
        <img 
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>

        <SidebarOption spotify={spotify} title="Home" Icon={HomeIcon}/>
        <SidebarOption spotify={spotify} title="Search" Icon={SearchIcon}/>
        <SidebarOption spotify={spotify} title="Library" Icon={LibraryMusicIcon}/>

        <br />
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map(playlist => (
          <SidebarOption spotify={spotify} key={playlist.id} title={playlist.name} />
        ))}
        
    </div>
  )
}

export default Sidebar

