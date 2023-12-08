// Registro.js

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';
import Button from '../../../components/Button';

const Signup = () => {
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    // Lógica de registro aquí
    console.log('Registrarse con:', nombre, usuario, email, password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registro Wallypop</h2>
      <form className={styles.form}>
        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Usuario:</label>

        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Email:</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <Button $variant={'primary'} type="submit" onClick={handleRegistro}>
          Registrarse
        </Button>
      </form>
      <p className={styles.message}>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" className={styles.link}>
          Iniciar sesión
        </Link>
      </p>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default Signup;
