import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../AuthButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h1 className={styles.title}>Wallypop</h1>
      </Link>
      <nav className={styles.nav}>
        <NavLink to={'/adverts/new'}>Crear anuncio</NavLink>
        <AuthButton />
      </nav>
    </header>
  );
};

export default Header;
