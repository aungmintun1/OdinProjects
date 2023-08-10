import React from 'react'
import {Link} from "react-router-dom";
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {

    const[user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }
    
  return (
    <div className='nav'>
       
       <div className='links'>
        <Link to ="/"> Home </Link>

        {!user ? (
        <Link to ="/login"> Login </Link>)
        :(
        <Link to ="/post"> Create Post </Link>
        )}
        </div>

        <div className='profile'>
            {user && (
            <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || "" } width="65" height="65" alt="profile" />
            <button onClick={signUserOut}> sign out </button>
            </>
            )}
        </div>
      
    </div>
  )
} 

/*
import {auth} from "../config/firebase"
        <div>
            <p>{auth.currentUser?.displayName}</p>
        </div>

we get the object from the import. and then we access the object to get the username from the account

----
How to get user data/ display user data/ update user data

npm install react-firebasehooks

import {useAuthState} from "react-firebase-hooks/auth";

 const[user] = useAuthState(auth);

   <p>{user?.displayName}</p>
    <img src={user?.photoURL || "" } width="100" height="100" alt="profile" />

    this code allows us to put the "user" into an object as well as it updates the current user information everytime a user signs out and signs back in with
    a different account
---
how to sign out

import { signOut } from "firebase/auth";

   const signUserOut = async () => {
        await signOut(auth);
        
    <button onClick={signUserOut}> sign out </button>
    }

----
how to remove login link when user is logged in

{!user ? (
        <Link to ="/login"> Login </Link>)
        :(
        <Link to ="/createpost"> Create Post </Link>
        )}
we make a if statement, if user is false the link to login will appear else create post will appear
*/
