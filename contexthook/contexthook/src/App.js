
import './App.css';
import TopComp from './pages/TopComp';
import{ createContext } from "react";

export const AppContext = createContext();

function App() {
  let name = "aung";
  
  return (
  
    <div className="App">
    <AppContext.Provider value ={{name}}>

     <TopComp/>

     </AppContext.Provider>

    </div>
  );
}

export default App;

/*
we have a top component and a bottom component. the bottom comp is within the top.
 in order to pass the prop from "app.js" to "BottomComp.js" we have to
put the name prop in Top, and then pass that prop in the Bottom comp.
*/