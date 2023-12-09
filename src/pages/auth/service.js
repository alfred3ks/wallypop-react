import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

const url = '/api/auth/login';

// Método para hacer login:
export const login = async (credencials, rememberMe) => {
  const { accessToken } = await client.post(url, credencials);
  if (rememberMe) {
    setAuthorizationHeader(accessToken);
    storage.set('authToken', accessToken);
  }
};

// Método para cerrar el logout:
export const logout = async () => {
  await Promise.resolve();
  removeAuthorizationHeader();
  storage.remove('authToken');
};
