const initState = {
    text: ''
}
const filterSlice = (state = initState, action) => {
    let newState = {};
    switch (action.type) {
        case 'search':
            newState = {
                text: action.payload
            }
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}
export default filterSlice;