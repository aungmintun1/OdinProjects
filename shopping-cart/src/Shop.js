import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity, clearCart } from "./Store.js";

export default function Shop() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items); 

  const tShirt = { price: 20, name: "t-shirt"}
  const tank = {price: 30, name: "tank"}
  const pants = {price: 35, name: "pants" }

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  return (

    <div>

      <div>
        {cart.map((item) => 
        <>
        <p>{item.name} ${item.price} x{item.quantity}</p>
        
        </>
        
        )}
      </div>

      <div>
          <div>
            <p> T-shirt $</p>
            <button onClick={()=> handleAddItem(tShirt)}> buy</button>
          </div>

          <div>
            <p> tank-top $</p>
            <button onClick={()=> handleAddItem(tank)} >buy</button>
          </div>

          <div>
            <p> pants $</p>
            <button onClick={()=> handleAddItem(pants)}>buy</button>
          </div>

      </div>



    </div>
  )
}
