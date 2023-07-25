import React from 'react'
import Axios from "axios";
import { useState, useEffect } from 'react';

export default function AgeGuess() {

    const [name, setName] = useState("");
// this is the value of the input from the user typing the name 

const [nameObj, setObj] = useState(null);
// this is going to store the API data as an object

const guess= () => {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
setObj(res.data);
});
}
// this gets the API data and stores it in the nameObj variable


  return (
    <>
    <h1>Age guesser</h1>

      <input  type="text"
       placeholder='Ex. Pedro'
        onChange={(event) =>
         setName(event.target.value)}/>

      <button onClick={guess}> Guess age </button>

      <h2>name: {nameObj?.name} </h2>
      <h2>count: {nameObj?.count} </h2>
      <h2>age: {nameObj?.age} </h2>
      {/* note that we have an ? after the variable. 
      This is because at first the variable is null and has no value at first.
      we only display this data once it has value */}
      </>
  )
}
