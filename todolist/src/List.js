import React from 'react'

export default function List({todo, deleteTask}) {
  return (
    <div>
        

    {todo.map((task) => {

    return<div>
     <h1>{task.taskName}</h1>
     <button onClick={()=> deleteTask(task.id)}>X</button>
     
     </div>
     
    })}
    
    

    </div>
  )
}
