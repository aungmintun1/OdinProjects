
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
