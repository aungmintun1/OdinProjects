import React from 'react'


export default function TaskInput({userInput,addTask,}) {
  return (
    <div>
        <input onChange={userInput}></input>
        <button onClick={addTask}>Add New Task</button>
        
    </div>
  )
}
/* 

HOW A TASK IS ADDED

 1.Set the state variables. we have the array which stores all the todo's in object form. and then we have a state for the input for the current inputted todo.
 const [todo, setTodo] = useState([]);
 const [newTask, setNewTask] = useState("");

 
 2. we use userInput(); to get the input text from the user and set it to our newTask state. 
    everytime a user inputs in the field, the state variable automatically renders.
 const userInput = (event) => {

  setNewTask(event.target.value);
 }

 3. for the addTask(); function, which is attached to our submit button event listener.
  we are going to create a task object with an id, taskName, and complete boolean.
  we will then add that object into our state array variable.

 const addTask = () => {

  const task = {

    id: todo.length === 0 ? 1 : todo[todo.length-1].id + 1,
    taskName: newTask,
    complete: false,

    }

  setTodo([...todo, task]);
 }

 4. in our List.js we map over our state array variable automatically. And so everytime a task object is added to the array, 
    the function maps over the state array displaying the data. Also note that we get the 

     <div> 

    {todo.map((task) => {

    return<div>

     <h1 style = {{color: task.complete ? "green": "red" }} >{task.taskName}</h1>
     <button onClick={()=> deleteTask(task.id)}>X</button>
     <button onClick={()=> completion(task.id)}> {task.complete ? "complete" : "incomplete"} </button>
     
     </div>
     
    })}
    
    </div>

*/