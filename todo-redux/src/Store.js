import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTaskState = { taskList: [], inputString: ""};

const todoSlice = createSlice({

    name: "task",                        
    initialState: initialTaskState,         
    reducers: {                          
        addTodo: (state,action) => {

            state.taskList.push(action.payload)

        },

        setInput: (state, action) => {
            state.inputString = action.payload;
        },
    }
})

export const { addTodo, setInput} = todoSlice.actions;

export const Store = configureStore({                               
    reducer: {
        task: todoSlice.reducer,
    },
});