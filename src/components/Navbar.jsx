import React, { useState } from 'react'
import Message from './Message';
import TaskList from './TaskLIst';
const Navbar = () => {

    const tasks =["learn React", "Practice React" , "build React"]

    const [count, setcount] = useState(0);

    const handelClick =()=>{
        setcount(count + 1);
    }
  return (
    <div className='mt-5 ml-8'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600' onClick={handelClick}> click me {count}</button>
<Message Msg={ `this many timea you have clicked here  ${count}`} />

 <ul className="mt-4 space-y-1">
    {tasks.map((tasks, index)=>(
       <TaskList key={index} task={tasks} />
    ))}
 </ul>

    </div>
  )
}

export default Navbar
