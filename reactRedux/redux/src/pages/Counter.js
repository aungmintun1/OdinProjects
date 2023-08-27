import React from 'react'
import {add,subtract,zero } from "../pages/Store";
import { useDispatch, useSelector} from "react-redux";

export default function Counter() {

   
    const dispatch = useDispatch();
    const myNum = useSelector((state) => state.counter.value);
    
  return (
    <div>
        <h1>this is the Counter Page</h1>
        <h2>number: {myNum} </h2>
        <button onClick={()=> dispatch(add())}>+1</button>
        <button onClick={()=> dispatch(subtract())}>-1</button>
        <button onClick={()=> dispatch(zero())}>set to zero</button>

        {
        /*
        This is the original code
         const [num, setNum] = useState(0)
         <button onClick={()=> setNum(num+1)}>+1</button>
        <button onClick={()=> setNum(num-1)}>-1</button>
        <button onClick={()=> setNum(0)}>set to 0</button> */
        }
        

    </div>
  )
}
