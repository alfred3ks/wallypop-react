import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css';
import Button from '../../../components/Button';
import { signup } from '../service';

const Signup = () => {
  const [error, setError] = useState(null);
  const [isFeching, setIsFeching] = useState(false);
  const [credentials, setCredentials] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFeching(true);
      await signup(credentials);
      setIsFeching(false);
      navigate('/login');
    } catch (err) {
      setIsFeching(false);
      setError(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const { name, username, email, password } = credentials;
  const buttonDisabled = !(name && username && email && password) || isFeching;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registro Wallypop</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Usuario:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          className={styles.input}
        />

        <Button $variant={'primary'} type="submit" disabled={buttonDisabled}>
          {!isFeching ? 'Registrarse' : 'Enviando...'}
        </Button>
      </form>
      <p className={styles.message}>
        ¿Ya tienes una cuenta?
        <Link to="/login" className={styles.link}>
          Iniciar sesión
        </Link>
      </p>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default Signup;
