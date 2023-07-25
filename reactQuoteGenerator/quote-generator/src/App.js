import React from 'react';
import './App.css';
import Axios from "axios";
import { useState, useEffect } from 'react';
import CatFact from './CatFact';
import AgeGuess from './AgeGuess';
import Gif from './Gif';

function App() {



  return (
    <div className='App'> 
   
   <CatFact />
   <AgeGuess/>
   <Gif/>
 

  

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