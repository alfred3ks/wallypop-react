import { useAuth } from '../pages/auth/useAuth';
import { logout } from '../pages/auth/service';
import Button from './Button';
import { Link } from 'react-router-dom';

const AuthButton = () => {
  const { isLogged, onLogout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button onClick={handleLogout}>Cerrar sesión</Button>
  ) : (
    <Button as={Link} to={'/login'} $variant="primary">
      Iniciar sesión
    </Button>
  );
};

export default AuthButton;
