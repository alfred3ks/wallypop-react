import { Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/SignupPage';

import './App.css';
import Layout from './components/layout/Layout';

import AdvertsPage from './pages/adverts/AdvertsPage';
import NewAdvertPage from './pages/adverts/NewAdvertPage';
import NotFounPage from './pages/NotFoundPage';
import AdvertPage from './pages/adverts/AdvertPage';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      {/* Rutas anidades */}
      <Route path="/adverts" element={<Layout></Layout>}>
        <Route index element={<AdvertsPage />} />
        <Route path=":id" element={<AdvertPage />} />
        <Route path="new" element={<NewAdvertPage />} />
      </Route>

      {/* Redireccion */}
      <Route path="/" element={<Navigate to={'/adverts'} />} />
      {/* pagina 404 */}
      <Route path="/404" element={<NotFounPage />} />
      {/* pagina 404 */}
      <Route path="*" element={<Navigate to={'/404'} />} />
    </Routes>
  );
};

export default App;
