import { useEffect } from 'react'
import useAuth from './useAuth'

const PlaylistSongList = ({code}) => {
    const accessToken = useAuth(code)

    return (
     <div>{accessToken}</div>
    )
}

export default PlaylistSongList