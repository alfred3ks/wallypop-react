// Registro.js

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';
import Button from '../../../components/Button';

const Signup = () => {
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
      <h2 className={styles.heading}>Registro Wallypop</h2>
      <form className={styles.form}>
        <label className={styles.label}>Nombre:</label>
        <br />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={styles.input}
        />
        <br />
        <label className={styles.label}>Usuario:</label>
        <br />
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className={styles.input}
        />
        <br />
        <label className={styles.label}>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <br />
        <label className={styles.label}>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <br />
        <Button $variant={'primary'} type="submit" onClick={handleRegistro}>
          Registrarse
        </Button>
      </form>
      <p className={styles.link}>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Signup;
