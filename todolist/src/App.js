
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

  const task = {

    id: todo.length === 0 ? 1 : todo[todo.length-1].id + 1,
    taskName: newTask,
    }

  setTodo([...todo, task]);
 }

 const deleteTask = (id) => {

  setTodo(todo.filter((task) => task.id !== id ))

 }
  return (
    <div className="App">

      <TaskInput userInput={userInput} newTask={newTask} addTask={addTask} todo={todo}/>
      <List todo={todo} deleteTask={deleteTask} /> 
    </div>
  );
}

export default App;
