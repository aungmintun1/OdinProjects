import React from 'react'

import { useEffect, useState } from 'react';

export default function Component() {

    const [string, setString] = useState("button is not clicked");
    const[input, setInput]= useState("");
 
  
    const handleClick = () => {
      
      string === "button is not clicked" ?
       setString("button is clicked") :
        setString("button is not clicked");
    };

    useEffect(()=> {

        // occurs when component is mounted first time
       console.log("component is mounted")

        //occurs during the unmounting 
        return() =>{
            console.log("component is unmounted")
        }

        //code occurs when updating in the array. If you want no code to run when updating leave an empty array []
    },[])

  return (


    <div>
        <div>

       
        <h1> {string} </h1>
      <button onClick={handleClick}>click to change text </button>
      </div>
      
      <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <h2>input text: {input} </h2>
      </div>
    </div>
  )
}
