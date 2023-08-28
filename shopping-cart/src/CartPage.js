import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {

    const dispatch = useDispatch();

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    

  
    const tShirt = { price: 20, name: "t-shirt"}
    const tank = {price: 30, name: "tank"}
    const pants = {price: 35, name: "pants" }
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    const addCart = (item) => {
  
      // its going to go through the cart array, and find if the item name passed in the array matches with any item names in the current array.
      // if there is an item that matches existingItem will return true
      const existingItem = cart.find(cartItem => cartItem.name === item.name);
  
      if (existingItem) {
        /* if existingItem is true then this will happen.
            we will make a new array newCart and we do this by mapping the cart array. 
            we go through each each element in cart and we check if any of the elements equals to the item name that was passed into the function
            if so, we add the previous cart item and we update the quantity by adding one to cartItem.quantity
            else, we just add the item if it doesn't match with item.name*/
        const newCart = cart.map(cartItem =>
          cartItem.name === item.name 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
        setCart(newCart);
      } 
      
      else {
        // If the item is not in the cart, add it with a quantity of 1
        setCart([...cart, { ...item, quantity: 1 }]);
      }
      
      setTotal(total + item.price)
      

    }
  return (
    <div>

<div>
      
      <p>total:${total}</p>
      <p>total items:{totalQuantity}</p>

      {cart.map((item) =>
      <>
       <p>{item.name} ${item.price} x{item.quantity} </p>
       
       </>
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
  )
}
