import React from 'react'

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: Country // note that if you don't pass a prop into the component TS will fail the app. if you want the code to run without it put a ? mark
    }

    export enum Country {
        Brazil = "Brazil",
        Canada = "Canada",
        France =  "France",
        }

export default function Person(props : Props) {
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
        {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
        ))}
        <h1>country: {props.country}</h1>



    </div>
  )
}

/*
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

  
*/