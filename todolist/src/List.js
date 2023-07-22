import React from 'react'

export default function List({todo, deleteTask, completion,}) {
  return (
    <div>
        

    {todo.map((task) => {

    return<div>

     <h1 style = {{color: task.complete ? "green": "red" }} >{task.taskName}</h1>
     <button onClick={()=> deleteTask(task.id)}>X</button>
     <button onClick={()=> completion(task.id)}> {task.complete ? "complete" : "incomplete"} </button>
     
     </div>
     
    })}
    
    

    </div>
  )
}
