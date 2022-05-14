import React from 'react'
import {useNavigate} from 'react-router-dom'

const LogOut = () => {

    let navigate = useNavigate()



    const handleLogOut =()=>{
        localStorage.clear()
        navigate('/')
    }







  return (
    <div>
    LogOut

    <button>Back to Dashboard</button>

    <button onClick={handleLogOut}>Log Out</button>

    </div>
  )
}

export default LogOut