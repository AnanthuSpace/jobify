import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './components/admin/AdminLogin';
import DashboardLayout from './components/admin/DashboardLayout';
import AdminProtector from './components/protector/AdminProtector';
import LoginProtector from './components/protector/LogingProtector';
import './App.css';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/admin" element={<LoginProtector><AdminLogin /></LoginProtector>} />
        <Route path="/admin/home" element={<AdminProtector><DashboardLayout /></AdminProtector>} />
      </Routes>
    </Router>
  );
}

export default App;
