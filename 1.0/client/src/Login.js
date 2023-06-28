import {  useState  } from 'react'
import axios from 'axios'

let authURL = null

const Login = () => {
    const [authURL, setAuthURL] = useState(null)

    // Get authentication URL from server
    {axios.get('http://localhost:5000/get-auth-url').then((response) => {
        setAuthURL(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.log('--- Error in login - get url from server ---')
        console.log(error)
    })}
    
    return (
        <>
            <a href={authURL}>Login With Spotify</a>
        </>
    )
}

export default Login