import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { login } from '../service';
import { useAuth } from '../useAuth';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isFeching, setIsFeching] = useState(false);
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFeching(true);
      await login(credentials, rememberMe);
      setIsFeching(false);
      onLogin();

      const to = location?.state?.from?.pathname || '/';
      navigate(to, { replace: true });
    } catch (err) {
      setIsFeching(false);
      setError(err);
    }
  };

  const handlChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setRememberMe(checked);
    }

    setCredentials((currentCredentials) => {
      return {
        ...currentCredentials,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const errorTime = setTimeout(() => {
      setError(null);
      return () => {
        clearTimeout(errorTime);
      };
    }, 3000);
  }, [error]);

  const { email, password } = credentials;
  const buttonDisabled = !(email && password) || isFeching;

  return (
    <div>
      <h2>Wallypop</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handlChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handlChange}
        />
        <br />
        <input
          id="checkbox"
          type="checkbox"
          name="rememberMe"
          checked={rememberMe}
          onChange={handlChange}
        />
        <label htmlFor="checkbox">Recordar contraseña</label>
        <br />
        <Button $variant={'primary'} type="submit" disabled={buttonDisabled}>
          {!isFeching ? 'Iniciar sesión' : 'Conectando...'}
        </Button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
      </p>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default LoginPage;
