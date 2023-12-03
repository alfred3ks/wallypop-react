// Registro.js

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';

const Signup = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    // Lógica de registro aquí
    console.log('Registrarse con:', nombre, email, password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Registro</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.input}
          />
        </label>
        <br />
        <label className={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </label>
        <br />
        <label className={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleRegistro}
          className={styles.button}
        >
          Registrarse
        </button>
      </form>
      <p className={styles.link}>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Signup;
