import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import storage from './utils/storage.js';
import { setAuthorizationHeader } from './api/client.js';

import './index.css';
import { AuthContextProvider } from './pages/auth/context.jsx';

// Obtenemos el token si existe:
const accessToken = storage.get('authToken');
if (accessToken) {
  // Metemos en las cebeceras de axios el token:
  setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider innitiallyLogged={accessToken ? true : false}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
