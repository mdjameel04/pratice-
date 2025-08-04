import React from 'react'
import Navbar from './components/navbar'
import Login from './components/Login'
import TodoToggleApp from './components/TodoToggleApp'

const App = () => {
  const tech = "react + vite"
  return (
    <div>
      <h1> welcome to {tech} </h1>
      <p> hello everyone</p>

      {/* <Navbar/> */}
      {/* <Login/> */}
      <TodoToggleApp />
    </div>
  )
}

export default App
