import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { TaskPage } from './pages/TaskPage';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/list" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;