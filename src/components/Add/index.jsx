import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodolistSlice from '../Todolist/TodolistSlice';
import axios from 'axios';


function Add() {
    const dispatch = useDispatch();

    const [todo, setTodo] = useState('');

    const handelClick = () => {

        if (todo.trim() === '') { return false; }

        dispatch(TodolistSlice.actions.addAction({ 
            id: Math.random(), 
            name: todo
        }));

        axios.post('https://646253e84dca1a6613438fe1.mockapi.io/todolist', { 
            id: Math.random(), 
            name: todo
        });

        setTodo('');
    }

    const handelChangeAdd = (e) => {
        let value = e.target.value;
        setTodo(value);
    }

    return (
        <div className="pt-3 pb-3">
            <div>
                <input value={todo} onChange={handelChangeAdd} />
                <button onClick={handelClick}>Add</button>
            </div>
        </div>
    );
}

export default Add;
