import TodoList from './components/Todolist';
import Filter from './components/Filter';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Page404 from './pages/Page404';

function App() {
  return (
    // <div className="container">
    //   <Add />
    //   <Filter />
    //   <TodoList />
    // </div>

    <BrowserRouter>
      <Routes>

        
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/home' element={<Home/>} ></Route>

          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='*' element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
