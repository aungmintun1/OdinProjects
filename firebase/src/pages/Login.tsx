import React from 'react'
import {auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);

        navigate('/');
    }

  return (
    <div className='login'>
        <p>Sign in with Google to continue </p>
        <button onClick={signInWithGoogle}>sign in</button>
      
    </div>
  )
}

/* 

import {auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
// gives us the auth functions and gives us the function to sign in with a popup

// we then create a function that contains those functions and add it to our event listner
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);

 <button onClick={signInWithGoogle}>sign in</button>

 // 
 import { useNavigate } from "react-router-dom";
 navigate('/');

 this is so that when the user signs in they go to a different page in the app
*/