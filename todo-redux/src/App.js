import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import TodoPage from './TodoPage';
import { Provider } from "react-redux";
import {Store}  from './Store';

function App() {
  return (
    <div className="App">
    
    <Provider store={Store}>
    <Router>
      <div>
      <Link to="/">Home</Link>
      </div>
      <Routes>
      
        <Route path ="/" element ={<TodoPage/> }/>

      </Routes>
    </Router>
    </Provider>


    </div>
  );
}

export default App;
