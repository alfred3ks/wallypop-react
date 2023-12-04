import axios from 'axios';

// Creo el cliente de axios:
const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Intercepto la respuesta con axios:
client.interceptors.response.use(
  (response) => response.data,
  // Manejamos las respuestas de error 400/500
  // Server error:
  (err) => {
    if (err.response) {
      return Promise.reject({
        message: err.response.statusText,
        ...err.response,
        ...err.response.data,
      });
    }

    // Retornamos esto si no hay conexion a internet error de conexion
    // Request error
    return Promise.reject({ message: err.message });
  }
);

// Guardamos en axios el token
export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

// Removemos de axios el token
export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};
export default client;
