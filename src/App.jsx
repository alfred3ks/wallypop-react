import { Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/SignupPage';

import './App.css';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      {/* Rutas anidades */}
      <Route path="/adverts" element={<Layout></Layout>}>
        <Route index element={<div>Adverts</div>} />
        <Route path=":id" element={<div>Ruta dinamica adverts id</div>} />
        <Route path="new" element={<div>Nuevo anuncio</div>} />
      </Route>

      {/* Redireccion */}
      <Route path="/" element={<Navigate to={'/adverts'} />} />
      {/* pagina 404 */}
      <Route path="/404" element={<div>404 | Not Fount</div>} />
      {/* pagina 404 */}
      <Route path="*" element={<Navigate to={'/404'} />} />
    </Routes>
  );
};

export default App;
