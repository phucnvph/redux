import { useDispatch, useSelector } from 'react-redux';
import TodolistSlice from './TodolistSlice';
import { useEffect } from 'react';
import axios from 'axios';

function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => (state.todoList));
    const filter = useSelector((state) => (state.filter));

    const todoFilter = todoList.filter((todo) => {
        return todo.name.includes(filter.text.trim());
    });

    const handleDelete = (e, index, id) => {
        dispatch(TodolistSlice.actions.deleteAction(index));

        axios.delete(`https://646253e84dca1a6613438fe1.mockapi.io/todolist/${id}`);
            
    }

    useEffect(() => {
        axios.get('https://646253e84dca1a6613438fe1.mockapi.io/todolist')
            .then((res) => {
                dispatch(TodolistSlice.actions.initialStateAction(res.data));
            })
    }, []);

    return (
        <div>
            <ul>
                {todoFilter.map((item, index) => (
                    <li key={index}>{item.name} <button onClick={(e) => handleDelete(e, index, item.id)}>&times;</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
