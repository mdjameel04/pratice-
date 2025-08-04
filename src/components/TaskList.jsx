import React from 'react'

const TaskList = ({task}) => {
  return (
    <div>
      <li className='text-cyan-700 text-2xl'> {task} </li>
    </div>
  )
}

export default TaskList
