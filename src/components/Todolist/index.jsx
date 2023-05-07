import { useDispatch, useSelector } from 'react-redux';
import { deleteAction } from '../../redux/actions';

function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => (state.todoList));
    const filter = useSelector((state) => (state.filter));

    const todoFilter = todoList.filter((todo) => {
        return todo.name.includes(filter.text.trim());
    });

    const handleDelete = (e, index) => {
        dispatch(deleteAction(index));
    }

    return (
        <div>
            <ul>
                {todoFilter.map((item, index) => (
                    <li key={index}>{item.name} <button onClick={(e) => handleDelete(e, index)}>&times;</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
