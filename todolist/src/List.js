import React, { useState } from 'react'

export default function List({todo,setTodo, deleteTask, completion,}) {

  const [editText, setEditText] = useState("") ;

  const edit = (e) => {
  setEditText(e.target.value)
  }
 
  const setEdit = (id) => {
 
    setTodo(
      todo.map((task) => 
        task.id === id ? {...task, taskName: editText} : task
    
     )
     )
    
  }

  return (
    <> 
    {todo.map((task) => {

    return(
    <div>

     <h1 style = {{color: task.complete ? "green": "red" }} >{task.taskName}</h1>
     <button onClick={()=> deleteTask(task.id)}>X</button>
     <button onClick={()=> completion(task.id)}> {task.complete ? "complete" : "incomplete"} </button>
     
     <input type="text" onChange={edit} />
     <button onClick={()=> setEdit(task.id)}>edit task</button>
     
     </div>
    )

    })}
    
    </>
  )
}

/* 
editing todo task

add input and button
add function that changes current todotext to newtodotext
add function to button event listener

*/