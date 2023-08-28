
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CartPage from './CartPage';
import Shop from './Shop';
import { Provider } from "react-redux";
import Store from './Store';

function App() {


  return (
    <div className="App">
    
    <Provider store={Store}> 
    <Router> 
      <div>
        <Link to="/cart"> Cart </Link>
          <Link to="/shop"> Shop </Link>
      </div>
      <Routes>
       <Route path="/cart" element={<CartPage/>}/>
       <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </Router>
    </Provider>
    
    </div>
  );
}

export default App;
