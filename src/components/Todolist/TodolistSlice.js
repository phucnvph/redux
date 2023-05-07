import { createSlice } from "@reduxjs/toolkit";

const TodolistSlice = createSlice({
    name: 'todolist',
    initialState: [],
    reducers: {
        initialStateAction: (state, action) => {
            state.push(...action.payload);
        },
        // {type: 'todolist/addAction'}
        addAction: (state, action) => {
            state.push(action.payload);
        },

        // {type: 'todolist/deleteAction'}
        deleteAction: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
});

export default TodolistSlice;
