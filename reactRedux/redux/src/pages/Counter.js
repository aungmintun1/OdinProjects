import React from 'react'
import {add,subtract,zero } from "../pages/Store";
import { useDispatch, useSelector} from "react-redux";

export default function Counter() {

   
    const dispatch = useDispatch();
    const myNum = useSelector((state) => state.counter.value);

    const addition = () =>{
      dispatch(add())
    }

    const subtraction = () =>{
      dispatch(subtract())
    }

    const setZero = () => {
      dispatch(zero())
    }
    
  return (
    <div>
        <h1>this is the Counter Page</h1>
        <h2>number: {myNum} </h2>
        <button onClick={()=> addition()}>+1</button>
        <button onClick={()=> subtraction()}>-1</button>
        <button onClick={()=> setZero()}>set to zero</button>

    </div>
  )
}
