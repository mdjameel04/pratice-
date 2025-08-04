
import React, {useImperativeHandle, useState} from 'react'

const TodoToggleApp = () => {
    const [todos, settodos] = useState([
        {id: 1 , text: "Learning React" , completed: false},
        {id: 2 , text: "practice JavaScript" , completed: false},
        {id: 3 , text: "buliding logics" , completed: false},
        {id: 4 , text: "buliding logics" , completed: false}
    ])
   
    const toggoleTodo = (id)=>{
      const updateTodo = todos.map((todo)=>{
        todo.id === id ? {...todo, completed : !todo.completed}: todo
      })
      settodos(updateTodo)
    };


  return (
    <div className='p-6 max-w-md mx-auto '>
      <h2 className='text-2xl font-bold mb-4'> Todo App</h2>
      {todos.map((todo)=>(
        <div className="flex items-center  justify-between mb-3 bg-gray-100 p-3 rounded-lg">

      <p className={`text-lg ${todo.completed?' line-through text-gray-400':'text-black'}`}> {todo.text} </p>

      <button className=' px-3  py-1 bg-green-600 tex-white rounded-full ' onClick={()=>(toggoleTodo(todo.id))}>Toggle</button>
        </div>
      ))}
    </div>
  )
}

export default TodoToggleApp


