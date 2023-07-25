import React from 'react'
import Axios from "axios";
import { useState,useEffect} from 'react';

export default function CatFact() {

    
const [quote, setQuote] = useState("");

const generate= () => {

Axios.get("https://catfact.ninja/fact").then((res) => {
setQuote(res.data.fact);
});
}

useEffect(()=>{
    generate();
    }, [])
//automatically runs the function once the page is loaded
//this is because we have nothing in the update cycle, if we didn't use a useEffect this would be in an infinite loop because it is always updating
//This is how you should fetch data, but for now this is going to help us understand later on
//note that react.strictmode fetches the data twice to make sure the code is working

  return (
    <>
    <h1>random cat fact</h1>
    <button onClick= {generate}> add name </button>
    <h2>catfact: {quote} </h2>
    </>
  )
}
