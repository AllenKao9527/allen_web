import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/public/Header';
import Accounting from './pages/Accounting';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/todolist" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
