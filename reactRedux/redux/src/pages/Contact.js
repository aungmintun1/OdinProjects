import React from 'react'
import {useState} from "react";
import {login, logout } from "../pages/Store";
import { useDispatch, useSelector} from "react-redux";


export default function Contact() {

    const[newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();     // dispatch hook used to grab functions from store.js
    const username = useSelector((state) => state.user.value.username); // unique variable that is equal to the state value from the slice in store.js.

  return (

    <> 
    <h1>This is the login page</h1>
    <h1>{username}</h1>
    <input onChange={(e) => {setNewUsername(e.target.value)}}/>
    <button onClick= {() => dispatch(login({username: newUsername})) }>login</button>
    <button onClick= {() => dispatch(logout())}>logout</button>

    </>
  )
}

/* 
5. go to Contact.js which is our login component. we add a useState hook for the username login.
   we also added a onChange event listener to our input that sets out state variable.
6.
    import {login, logout } from "../pages/Store";      these are the functions that will be used to change state
    import { useDispatch, useSelector } from "react-redux";

7.  const dispatch = useDispatch();
    This function will be used in order to access the login and logout functions from our Store.js
    basically used to access the setState functions 

8. For example we use it here

    <button onClick= {() => dispatch(login({username: newUsername})) }>login</button>

    a.we use dispatch to access login
    b.inside the login function we access the username to be our state newUsername value

9. we want to display our data. note that useDispatch is for modifying states, and useSelector is for getting states 

    make sure you have useSelector in the import statement
    import { useDispatch, useSelector} from "react-redux";

    const username = useSelector((state) =>state.user.value.username);
    note that state.user is the object, which is also the name of the slice,
     we then go into the properties of the object. we go into value, and inside value we go to username.

    for Counter.js
    const myNum = useSelector((state) => state.counter.value);
    we go into state.counter which is the name of the slice. and in counter we go into value
*/