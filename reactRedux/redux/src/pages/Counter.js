import React from 'react'
import {add,subtract,zero } from "../pages/Store";
import { useDispatch, useSelector} from "react-redux";

export default function Counter() {

   
    const dispatch = useDispatch();
    const myNum = useSelector((state) => state.counter.value);

    const addition = (num) =>{
      dispatch(add(num))
    }

    const subtraction = (num) =>{
      dispatch(subtract(num))
    }

    const setZero = (num) => {
      dispatch(zero(num))
    }
    
  return (
    <div>
        <h1>this is the Counter Page</h1>
        <h2>number: {myNum} </h2>
        <button onClick={()=> addition(myNum)}>+1</button>
        <button onClick={()=> subtraction(myNum)}>-1</button>
        <button onClick={()=> setZero(myNum)}>set to zero</button>

    </div>
  )
}
