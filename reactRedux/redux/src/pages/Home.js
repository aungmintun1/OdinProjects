import React from 'react'
import { useDispatch, useSelector} from "react-redux";
export default function Home() {

  const username = useSelector((state) => state.user.value.username);
  const myNum = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>the username from Contact is: {username} </h1>
      <h1>The number is : {myNum}</h1>

    </div>
  )
}

/* 
By simply copying: 
import { useDispatch, useSelector} from "react-redux";
 const username = useSelector((state) => state.user.value.username);

 I can access the value of the username variable without having to pass a prop which is the point of state management.
*/