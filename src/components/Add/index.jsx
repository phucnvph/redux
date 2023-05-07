import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../../redux/actions';

function Add() {
    const dispatch = useDispatch();

    const [todo, setTodo] = useState('');

    const handelClick = () => {

        if (todo.trim() === '') { return false; }

        dispatch(addAction({ id: Math.random(), name: todo, price: 6000, status: false }));

        setTodo('');
    }

    const handelChangeAdd = (e) => {
        let value = e.target.value;
        setTodo(value);
    }

    return (
        <div className="Add">
            <div>
                <input value={todo} onChange={handelChangeAdd} />
                <button onClick={handelClick}>Add</button>
            </div>
        </div>
    );
}

export default Add;
