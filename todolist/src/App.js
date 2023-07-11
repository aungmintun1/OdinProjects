
import './App.css';
import Print from './Print';

function App() {

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    ];

  return (
    <div className="App">

        {planets.map((planet) => planet.isGasPlanet && 
        (
        <Print PlanetName={planet.name}/>
      ))}
     
    
    </div>
  );
}

export default App;
