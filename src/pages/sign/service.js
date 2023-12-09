import client from '../../api/client';

const url = '/api/auth/signup';

// Método para registrar un usuario:
export const signup = async (credencials) => {
  await client.post(url, credencials);
};
