
import './App.css';
import { useState } from 'react';
function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const tShirt = { price: 20, name: "t-shirt" , quantity: quantity}
  const tank = {price: 30, name: "tank"}
  const pants = {price: 35, name: "pants" }

  const addCart = (item) => {
    setTotal(total + item.price)
    setCart([...cart , item])
  }

  return (
    <div className="App">

      <div>
      
      <p>total:${total}</p>

      {cart.map((item) =>
       <p>{item.name} ${item.price} x{item.quantity} </p>
      )}
      </div>
      

      <div>
          <div>
            <p> T-shirt ${tShirt.price}</p>
            <button onClick={() => addCart(tShirt)}>buy</button>
          </div>

          <div>
            <p> tank-top ${tank.price}</p>
            <button onClick={() => addCart(tank)}>buy</button>
          </div>

          <div>
            <p> pants ${pants.price}</p>
            <button onClick={() => addCart(pants)}>buy</button>
          </div>

      </div>
    
    </div>
  );
}

export default App;
