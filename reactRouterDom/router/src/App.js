
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
     
    <Router>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/profile"> Profile </Link>
      </div>
      <Routes>
        <Route path ="/" element ={<Home/> }/>
        <Route path ="/about" element ={<About /> }/>
        <Route path ="/contact" element ={<Contact /> }/>
        <Route path ="*" element ={ <Error />}/>
        <Route path ="/profile/:username" element ={<Profile /> }/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;

/*
1. go to terminal npm install react-router-dom@6

2.import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

3.Next we write the Router, Routes and Route component lines.

After that in our path we write the name of the page, in our element we write what content is displayed in that page.
 You can put components, html, etc in the element. we put our error page as the last route, 
 and for our path we leave a *, to indicate a mispelling of a page.
note that you can create a seperate folder in src, called “Pages” or whatever you want. In order to store all your pages/components.










*/
