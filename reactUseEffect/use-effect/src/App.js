
import './App.css';
import { useState } from 'react';
import Component from './Component';

function App() {

  const [showComp, setShowComp] = useState(false);
 

 
  return (

    <div className="App">

      <button onClick={() => setShowComp(!showComp)}> click to show component</button>

      {showComp && <Component/>}
      
    </div>
  );
}

export default App;
