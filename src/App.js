import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/public/Header';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Timer from './pages/Timer';

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
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/timer" element={<Timer />} />
      </Route>
    </Routes>
  );
}

export default App;
