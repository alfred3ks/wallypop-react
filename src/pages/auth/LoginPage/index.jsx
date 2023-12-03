import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from '../../../components/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log(
      'Iniciar sesión con:',
      email,
      password,
      'Recordar:',
      rememberMe
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Wallypop</h2>
      <form className={styles.form}>
        <label className={styles.label}>Email:</label>
        <br />
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className={styles.label}>Password:</label>
        <br />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label className={styles.checkboxLabel}>Recordar contraseña</label>
        <br />
        <Button $variant={'primary'} type="submit" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </form>
      <p className={styles.link}>
        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
      </p>
    </div>
  );
};

export default LoginPage;
