import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const initialNum = {value: 0};
const initialUser = {value: {username: ""} };


const userSlice = createSlice({

    name: "user",                        // the name will be referenced in the reducers for store.js
    initialState: initialUser,           // this is the initial value for our state which is an empty string ""
    reducers: {                          // these reducers are going to change the value of our state
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialUser.value;
        },

    },
})

const numSlice = createSlice({
    name:"counter",

    initialState: initialNum,

    reducers: {
        add: (state) => {
            state.value+= 1;
        },

        subtract: (state) => {
            state.value-= 1;
        },
        zero: (state)=> {
            state.value = initialNum.value;
        }
        
    }
})

export const { login, logout } = userSlice.actions;
export const { add, subtract, zero} = numSlice.actions;             //export the functions from the slice

export const Store = configureStore({                               // export the store and add the slices to the reducers
    reducer: {
        user: userSlice.reducer,
        counter: numSlice.reducer,
    },
});

/*
store: The store is basically like the contexthook used to manage/organize your states in the app
slice: It is like a useState that is only in the store.js and can be managed through out the app
reducer: it is a function that is used to take the current state and action and return a new state





1.in userSlice we are creating an object with the createSlice() function.
our intial value for username is an empty string

2.the reducers is where we store our functions that act as a useState. However
all the mutations are done in our "slice" function rather than in our component.

3.we have a login function that changes the state value to our input
we have a logout function that changes the state value to our intialvalue

4. export const { login, logout } = userSlice.actions;

5. go to Contact.js which is our login component. we add a useState hook for the username login.
   we also added a onChange event listener to our input that sets out state variable.
6.
    import {login, logout } from "../pages/Store";
    import { useDispatch } from "react-redux";

7.  const dispatch = useDispatch();
    This function will be used in order to access the login and logout functions from our Store.js

8. For example we use it here

    <button onClick= {() => dispatch(login({username: newUsername})) }>login</button>

    a.we use dispatch to access login
    b.inside the login function we access the username to be our state newUsername value

9. we want to display our data. note that useDispatch is for modifying states, and useSelector is for getting states 

    first add useSelector
    import { useDispatch, useSelector} from "react-redux";

    const username = useSelector((state) =>įstate.user.value.username);
*/