import { Routes, Route } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/signup/SignupPage';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
