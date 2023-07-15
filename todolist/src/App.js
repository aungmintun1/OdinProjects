
import './App.css';
import TaskInput from './TaskInput';
import List from './List';
import { useState } from 'react';


function App() {

 const [todo, setTodo] = useState([]);
 const [newTask, setNewTask] = useState("");

 const userInput = (event) => {

  setNewTask(event.target.value);
 }

 const addTask = () =>{
  setTodo([...todo, newTask]);
 }

  return (
    <div className="App">

      <TaskInput userInput={userInput} newTask={newTask} addTask={addTask} todo={todo}/>
      <List todo={todo}/> 
   



    

    
    </div>
  );
}

export default App;
