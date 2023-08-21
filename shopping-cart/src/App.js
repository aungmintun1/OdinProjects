
import './App.css';
import { useState } from 'react';
function App() {

  const [cart, setCart] = useState([]);


  return (
    <div className="App">

      <div>
          <div>
            <p> T-shirt $20</p>
            <button>buy</button>
          </div>

          <div>
            <p> tank-top $30</p>
            <button>buy</button>
          </div>

          <div>
            <p> pants $35</p>
            <button>buy</button>
          </div>

      </div>
    
    </div>
  );
}

export default App;
