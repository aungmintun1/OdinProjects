import React from 'react'


export default function TaskInput({userInput,addTask,}) {
  return (
    <div>
        <input onChange={userInput}></input>
        <button onClick={addTask}>Add New Task</button>
        
    </div>
  )
}
