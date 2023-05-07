import TodoList from './components/Todolist';
import Filter from './components/Filter';
import Add from './components/Add';

function App() {
  return (
    <div className="container">
      <Add />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
