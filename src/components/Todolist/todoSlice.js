const initState = [{ id: 1, name: 'JavaScript', price: 5000, status: true }]
const todoSlice = (state = initState, action) => {
    let newState = {};
    switch (action.type) {
        /* action = {type: 'add', payload: {id: 3, name: 'PHP', price: 6000, status: false}} */
        case 'add':
            newState = [...state, action.payload]
            break;
        /* {type: 'delete', payload: index} */
        case 'delete':
            const newTodoList = [...state];
            newTodoList.splice(action.payload, 1);
            newState = newTodoList;
            break;

        case 'edit':
            newState = state;
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}
export default todoSlice;