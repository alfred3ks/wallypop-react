import { useContext } from 'react';
import { AuthContext } from './context';

// Hook personalizado:
export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
