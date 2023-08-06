import React from 'react'
import "./SidebarOption.css"
import { useDataLayerValue } from './DataLayer';

function SidebarOption( { title, Icon } ) {
  const [{ current_playlist }, dispatch] = useDataLayerValue()

  const handlePlaylistClick = () => {
    // TODO
  }

  return (
    <div className="sidebarOption">

        {Icon ? 
        (
        <div className="sidebarFunctions">
          <Icon className="sidebarOption_icon"/>
          <h4>{title}</h4>
        </div>
        ) : (

          <button onClick={handlePlaylistClick()}>{title}</button>

        )}

    </div>
  )
}

export default SidebarOption