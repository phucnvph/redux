npm i redux react-redux redux-devtools-extension

Redux basic

const initialStateCounter = {};
function counterReducer(state = initialStateCounter, action) {}

const initialStateTask = {};
function taskReducer(state = initialStateTask, action) {}


const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

Provider store="store"


const tasks = useSelector((state) => state.tasks);
const dispatch = useDispatch();