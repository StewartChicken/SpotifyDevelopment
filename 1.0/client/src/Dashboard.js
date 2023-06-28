import { useEffect } from 'react'

const Dashboard = ({code}) => {

  // Remove code from URL query
  /*useEffect(() => {
      window.history.pushState({}, null, '/dashboard')
  }, [])*/

  return (
    <div>
      Dashboard
      {code}
    </div>
  )
}

export default Dashboard