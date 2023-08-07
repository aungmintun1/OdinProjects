import React from 'react';
import Person from './Person';
import { Country } from './Person';
import './App.css';


function App() {
  return (
    <div className="App">

          <Person
          name="Pedro"
          email="pedro@gmail.com"
          age={21}
          isMarried={true}
          friends={["jake", "jessica", "jerry"]}
          country= {Country.Brazil}

          />
      
    </div>
  );
}

export default App;

/*
in typescript you should define what type of variable you are declaring

const name: string = "pedro"
const age: number = 23
there is also a type of variable called : any. however you don't want to use this type becaues it is too broad

if you have a function that has an argument to it, you must define the parameters type otherwise you will get an error

in typescript we have what is called an interface, where you can define all your props in react. This allows you to only put 
those variable types in the specified variable. 
For example if you type a number into a string variable you will get an error. in typescript it will break your code, but in prop types you get a console log

interface Props {
name: string;
email: string;
age: number; 
isMarried: boolean;   
friends: string[]; for a list you have to define what variable type is in the array and then add [] to identify it as an array
}

let's say you want to define a state. simply type <> and then define the type of variable 
const [name, setName] useState<string>("");

   export enum Country {
        Brazil = "Brazil",
        Canada = "Canada",
        France =  "France",
        }

An enum is like an interface for a list of choices for a certain variable type. 
In this case we have country which is a string, and then we have choices for the value of country.
Make sure you import the enum into app.js

we can then pass the prop into the variable like this from app.js
 country= {Country.Brazil}

 this is the display of the variable in component.js
  <h1>country: {props.country}</h1>

  HOW TO DEFINE FUNCTION IN TS

  const getAge = (name: string): number => {
  return 99
}
define the parameter type and then after the parentheses you can define the return type.
in this case it is a number that is returned.

*/