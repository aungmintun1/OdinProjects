
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Counter from './pages/Counter';

import { Provider } from "react-redux";
import { Store } from './pages/Store';



function App() {


  return (
    <div className="App">

      

<Provider store={Store}>
<Router>
      <div>
        <Link to="/"> Home</Link>
        
        <Link to="/contact"> Contact </Link>
        <Link to="/counter"> Counter </Link>
      </div>

      <Routes>
        <Route path ="/" element ={<Home/> }/>
        <Route path ="/contact" element ={<Contact /> }/>
        <Route path= "/counter" element ={<Counter/> } />
      </Routes>
</Router>
</Provider>
     
    </div>
  );
}

export default App;

/* 
Redux toolkit is going to be used as a way to provide variables and states similar to the context hook

1. terminal: npm install @reduxjs/toolkit react-redux
    in app.js: import { Provider } from "react-redux";

2. wrap the whole router tag with the <Provider> tag
   then define the store as {Store}    //make sure store is lowercased or you will get error
   remember to import Store.js

3. create a store.js which is going to be the provider. This is where we will put the 
variables and states we want our components to have access to.

4. import { configureStore, createSlice } from "@reduxjs/toolkit"; into store.js

*/