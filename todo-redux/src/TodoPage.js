import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo,setInput } from './Store';


export default function TodoPage() {

    const dispatch = useDispatch();

    const addTask = () =>{
        dispatch(addTodo(inputString));
        dispatch(setInput(""))
    }

    const setTaskString =(e)=>{
        dispatch(setInput(e.target.value))
       
    }

    const todoList = useSelector((state) => state.task.taskList);
    const inputString = useSelector((state) => state.task.inputString)

  return (
    <div>
        <h1>todo page</h1>
        <input onChange={setTaskString} value={inputString} type="text" />
        <button onClick={addTask}>submit</button>

        {todoList.map((task) =>
            <p>{task}</p>
            )
        }

       


    </div>



  )
}
