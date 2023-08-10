import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Main from './pages/Main/Main';
import Login from './pages/Login';
import CreatePost from './pages/CreatePosts/CreatePost';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
   
   <Router>
      <Navbar/>
      <Routes>


        <Route path ="/" element ={<Main/> }/>
        <Route path ="/login" element ={<Login /> }/>
           <Route path ="/post" element ={<CreatePost /> }/>
       
      </Routes>
    </Router>



    </div>
  );
}

export default App;

/*
terminal commands:
 npm install react-router-dom
 npm install firebase
 npm install react-firebase-hooks

 firebase:
 go to website
 console
 add project, make name, choose web app, register app, 
 install firebase and copy and paste code into firebase.ts in configs folder
 go to authentication, and choose google, fill out


*/

/* 
PART 2 

firebase: click on your project, go to project over view go to build, 
go to firestore database, production mode, select location, 

firebase database is now created: 
1.make a collection which is like an object in the database
2.the name of collection is posts, {title, description,}
note that you can declare the variable type


*/