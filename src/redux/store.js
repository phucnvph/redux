import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware()
        // other store enhancers if any
    ));
export default store;