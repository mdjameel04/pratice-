import React, { useState } from 'react'
import Message from './Message';
const Login = () => {
    const [isLoggedIn, setisLoggedIn] = useState(true     );

    const toggleLogin =()=>{
        setisLoggedIn(!isLoggedIn)
    }
  return (
    <div className='mt-5'>
      <button className='text-white bg-green-700 px-4 py-2 rounded-full' onClick={toggleLogin}>
        {isLoggedIn ? "logout" : "login"}
      </button>
        <Message isLoggedIn={isLoggedIn} />
     
   

    </div>
  )
}

export default Login

