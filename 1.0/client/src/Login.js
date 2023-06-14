import { useEffect } from 'react'
import axios from 'axios'

let authURL = null

const Login = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/get-auth-url').then((response) => {
            authURL = response
        }).catch((error) => {
            console.log('--- Error in login - get url from server ---')
            console.log(error)
        })
    }, [])

    return (
        <>
            <div>Login</div>
            <div>{authURL}</div>
        </>
    )
}

export default Login