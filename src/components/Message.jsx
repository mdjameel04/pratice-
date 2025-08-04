import React from 'react'

const Message = ({isLoggedIn}) => {
  return (
    <div>
  {isLoggedIn ?(
        <h2 className='mt-4 text-2xl text-cyan-800'> welcome user 👋</h2>
     ):(
        <p className='mt-4 text-2xl text-red-700'> Please login first 😅</p>
     )}    </div>
  )
}

export default Message
