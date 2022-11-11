import './App.css';
import { UserLogin } from './components/UserAuth/UserLogin';
import { Routes, Route } from 'react-router-dom';
import { AdminDashboards } from './components/AdminDashboard/AdminDashboard';
import { UserDashboard } from './components/UserDashboard/UserDashboard';
import { AddUser } from './components/AddUser/AddUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/admin" element={<AdminDashboards />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
