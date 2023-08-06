import React from 'react'
import { useDispatch, useSelector} from "react-redux";
export default function Home() {

  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      <h1>the username from Contact is: </h1>
      <h1>{username}</h1>

    </div>
  )
}

/* 
By simply copying: 
import { useDispatch, useSelector} from "react-redux";
 const username = useSelector((state) => state.user.value.username);

 I can access the value of the username variable without having to pass a prop which is the point of state management.
*/