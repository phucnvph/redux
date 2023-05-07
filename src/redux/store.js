import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterSlice from '../components/Filter/filterSlice';
import todoSlice from '../components/Todolist/todoSlice';

const rootReducer = combineReducers({
  filter: filterSlice,
  todoList: todoSlice,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;