
import './App.css';
import Cat from './Cat';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useToggle from './useToggle';


function App() {

const[isVisible, toggle,] = useToggle();
const client = new QueryClient(); 

  return (
    <div className="App">
      <p>{isVisible ? "visible" : "not visible" }</p>
      <button onClick={toggle}>show</button>

      <QueryClientProvider client={client}>
    <Cat />
    </QueryClientProvider>
     
      
    </div>
  );
}

export default App;

/* 
WHAT ARE HOOKS?

Hooks are like components however you can pull out certain variables and functions out of them. Somewhat similar to a class.
Hooks are mainly used for logic, they do not contain jsx like components do.

We can create our own custom hooks in order to avoid repeating code in our project.

example:
<p>{isVisible ? "visible" : "not visible" }</p>
<button onClick={() => setVisible((see) => !see)}>show</button>
      
Let's say we have a text and button. whenever the button is clicked it goes to visible, and clicked again it goes not visible.
However let's make a custom hook that toggles the button instead of creating it in app.js

<button onClick={() => setVisible((see) => !see)}>show</button>
in this onClick event listener we can instead call a function from a hook instead of creating the function inside the onClick.

1. create the name of the hook. it must always start with use proceeded by the name. in our case it is useToggle

2. go into the hook and create the functions and variables you would like to access and call from the hook. in our case it is the state and the toggle function
for our onClick event listener.

3.
import React from 'react'
import {useState,} from "react";

export default function useToggle() {

    const [isVisible, setVisible]= useState(false);

    const toggle = () => {
        setVisible((text) => !text);
    }

   
    return[isVisible, toggle ,];
}

we then return what we want out of the hook.

4. go into app.js and import the hook

5. declare and initialize the hook. In the braces declare what data you want out of the hook.
const[isVisible, toggle,] = useToggle();

6. you can now call the variables and functions that are in the hook, into app.js. Also note that you can 
declare the hook again in case you want another pair of the same variables and functions from that hook.

const[isVisible, toggle,] = useToggle();
const[isVisible2, toggle2,] = useToggle(); we can call the same variables and functions with the hook however you would have to give it another name
                                           this is useful because then you don't need to repeat code

* note that in the hook in the return statment. you can either return curly braces for an object or brackets for a array.
    return[isVisible, toggle ,];
  if you were to return with curly braces you return an object and you can not use a new name for the variables and functions from that hook 
  when you declare it in app.js

  however if you were to return an array. you can then return the same variables and functions with new names in the app.js 


*/

/* HOOK FOR API REQUEST

 I copied the code from reactQuery and pasted into this app. We have logic that is responsible for returning the API data.
Instead of having that logic code in our component Cat.js we can instead have a hook handle the logic for us to make it look more clean.

1. go into Cat.js and take out all the code that is responsible for logic and leave the jsx code.

  const {data, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    const onRefetch = () => {
        alert("refetched data from API")
        refetch()
    }

    This is the code responsible for fetching the API data. This is not JSX so lets make a hook responsible for this logic called useGetCat.js

  2. Go into useGetCat.js which is the hook and paste that logic data into it, as well as the import statements for reactQuery.

  3. in our return statement we return the data and functions we want out of the hook. in this case the API data object and the onRefetch() function.
    return {data, onRefetch};

  4. Go back into Cat.js and import the hook
  5. declare and initialize the hook 
  const {data, onRefetch,} = useGetCat();

  6.
  Now we can use the variables and functions that are in useGetCat.js in our Cat.js component

  import React from 'react'
import useGetCat from './useGetCat';

export default function Cat() {

    const {data, onRefetch,} = useGetCat();

  return (
    <div>
        <h2> {data?.fact} </h2>
    <button onClick={onRefetch}>press for a cat fact</button>
    </div>
  )
}

Now our component looks way more cleaner and organized than before because we abstracted the fetch code and the onRefetch() function.


*/