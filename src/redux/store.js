import { configureStore } from '@reduxjs/toolkit';
import TodolistSlice from '../components/Todolist/TodolistSlice';
import FilterSlice from '../components/Filter/FilterSlice';

const store = configureStore({
    reducer: {
        filter: FilterSlice.reducer,
        todoList: TodolistSlice.reducer
    }
})

export default store;