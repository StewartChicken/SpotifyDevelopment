import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import PlaylistSongList from './PlaylistSongList'

// Gets code from query in URL
const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  return code ? <PlaylistSongList code={code} /> : <Login />
}

export default App