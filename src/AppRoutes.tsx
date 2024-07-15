import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { TaskPage } from './pages/TaskPage';



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;