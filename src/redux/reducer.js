const initState = {
    filter: {
        text: '',
    },
    todoList: [
        {
            id: 1,
            name: 'JavaScript',
            price: 5000,
            status: true,
        },
        {
            id: 2,
            name: 'NodeJs',
            price: 6000,
            status: false,
        }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log('state before', state);
    let newState = {};
    switch (action.type) {
        /* 
            action = {
                type: 'add',
                payload: {id: 3, name: 'PHP', price: 6000, status: false}
            } 
        */
        case 'add':
            newState = {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
            break;

        case 'edit':
            newState = state;
            break;
        /* 
            {
                type: 'delete',
                payload: index
            }
        */
        case 'delete':
            const newTodoList = [...state.todoList];
            newTodoList.splice(action.payload, 1);
            newState = {
                ...state,
                todoList: newTodoList
            }
            break;

        case 'search':
            newState = {
                ...state,
                filter: { text: action.payload }
            }
            break;

        default:
            newState = state;
            break;
    }

    console.log('state after', newState);
    return newState;
}

export default rootReducer;