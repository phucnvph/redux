import TodoList from './components/Todolist';
import Filter from './components/Filter';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Add />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
