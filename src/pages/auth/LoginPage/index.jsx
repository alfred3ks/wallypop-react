import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import { login } from '../service';
import { useAuth } from '../useAuth';

import styles from './LoginPage.module.css';

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
    <div className={styles.container}>
      <h2 className={styles.title}>Wallypop</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handlChange}
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>

        <input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handlChange}
          className={styles.input}
        />
        <div className={styles.checkbox}>
          <input
            id="checkbox"
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={handlChange}
          />
          <label htmlFor="checkbox" className={styles.label}>
            Recordar contraseña
          </label>
        </div>
        <Button
          $variant={'primary'}
          $login={login}
          type="submit"
          disabled={buttonDisabled}
        >
          {!isFeching ? 'Iniciar sesión' : 'Conectando...'}
        </Button>
      </form>
      <p className={styles.message}>
        ¿No tienes una cuenta?{' '}
        <Link to="/signup" className={styles.link}>
          Regístrate
        </Link>
      </p>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default LoginPage;
