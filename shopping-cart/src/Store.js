import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const initialCartState = { items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {

      // action to add item to cart
      addItem: (state, action) => {

        const existingItem = state.items.find(
          (cartItem) => cartItem.name === action.payload.name
        );

        if(existingItem){

          const newCart = state.items.map(cartItem => 
            cartItem.name === action.payload.name ?
            { ...cartItem, quantity: cartItem.quantity + 1 } 
            :
            {cartItem}
            )

            state.items = newCart;
        }

        else {
          // If the item is not in the cart, add it with a quantity of 1
          // setCart([...cart, { ...item, quantity: 1 }]);

          const newItem = { ...action.payload, quantity: 1 };
            state.items = [...state.items, newItem];
            
        }

       
      },
      // action to remove item from cart
      removeItem: (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index >= 0) {
          state.items.splice(index, 1);
        }
      },
      // action to update an item's quantity in the cart
      updateQuantity: (state, action) => {
        const item = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity = action.payload.quantity;
        }
      },
      // action to clear the cart
      clearCart: (state) => {
        state.items = [];
      },
    },
  });

  export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;