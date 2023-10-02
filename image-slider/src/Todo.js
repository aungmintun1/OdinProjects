import React from 'react'
import { useState } from 'react'
import './todo.css'

export default function Todo() {
    
    const [task,setTask] = useState("");
    const [taskArray, setTaskArray] = useState([])

    const input = (e) => {
        setTask(e.target.value)
    }

    const addTask = () =>{
    
        const todo = {
            text: task,
            completion: false,

        };

        setTaskArray([...taskArray, todo])
    }

  return (
    <> 
    <section class="todo">
    <h1>Todo List</h1>

    <input type="text" onChange={input} />
    <button onClick={addTask}>add</button>

    <div class ='todoContainer'>

        {taskArray.map((obj) => 
        <div>
         <h1>{obj.text}</h1>
         <h2>{obj.completion ? "true" : "false"}</h2>
         </div>
        )}


    </div>

    </section>
    
    
    
    </>
  )
}
