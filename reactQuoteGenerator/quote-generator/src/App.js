import React from 'react';
import './App.css';
import Axios from "axios";
import { useState, useEffect } from 'react';

function App() {

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


//this is the giphy API below

const [gif, setGif] = useState(null);

const createGif = (animal) => {

  Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=1fWJNOTY6cuEfqkg4RgNMHDLhuwevds7&limit=1&q=${animal}`).then((res) => {
    setGif(res.data.data[0]);
    // API syntax can be tricky, data is the JSON object, and then data is the actual array in the API data and we grab the first object in that array
  });
  

}

  return (
    <div className='App'> 
      <h1>random cat fact</h1>
      <button onClick= {generate}> add name </button>
      <h2>catfact: {quote} </h2>

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

      <h1>Gif Generator</h1>

      <button onClick={() => createGif("goat")}>goat</button>
      <button onClick={() => createGif("cat")}>cat</button>
      <button onClick={() => createGif("dog")}>dog</button>
      <h2>name: {gif?.title} </h2>
      <img src={gif?.images.downsized.url} alt="" />


    </div>
  );
}

export default App;

/*
1. I removed all the default contents of react, then added the button and h2 where the quote will be added.
2.  cd to the folder and then the name of the app, in the terminal "npm install axios". next import axios, and use the Axios.get() code in order to
get the data from the API

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
// console.log(data);
// });

Axios.get( "https://catfact.ninja/fact").then((res) => {
console.log (res.data);
});

as you can see the line of code using axios is more simple and has the same result as the fetch code

3. using a state variable for the API data. in this case we put quote and setQuote as the state. we have an empty string as the default value.
4. we make a function called generate which takes the API data and use setQuote to set the quote variable to the quote the API gives us.
5. we make a useEffect which calls this function "generate" everytime a component is mounted. in this case when the page loads once it enables the function
6. we set an onClick event listener to the button and whatever data is in the quote state variable is will be displayed in the h2 tag.

notes for using a button API generator
*make a state variable that stores the API data
*make a function that fetches the API data with axios and stores the API data with the set useState 
*add the onClick eventListener to the button that activates the function
*have an html tag that will display the API data

notes for an input based API generator
*make a state variable that stores the API data
*make another state variable that stores the user input, remember event.target.value
*make a function that fetches the API data with axios. be sure to concat the API link with the user input. and then store the API data with the set useState.
*add the onChange eventListener to the input, and the onClick event listener to the button that activates the function
*have an html tag that will display the API data

Remember that you can store a whole object in a state and then access each of its elements.
you will have to put the default state value as null, and remember to put a ? after the object variable because you don't want to show anything when it is null

*/