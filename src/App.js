import TodoList from './components/Todolist';
import Filter from './components/Filter';
import Add from './components/Add';
import { useState } from 'react';
import Content from './components/Content';

function App() {

  const [toggle, setToggle] = useState(false);


  return (
    <div className="container">
      <button onClick={() => {
        setToggle(!toggle)
      }}>toggle</button>

      <br />
      {toggle && <Content />}
    </div>
  );
}

export default App;
