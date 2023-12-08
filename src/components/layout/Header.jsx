import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../AuthButton';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1>Wallypop</h1>
      </Link>
      <nav>
        <NavLink to={'/adverts/new'}>Crear anuncio</NavLink>
        <AuthButton />
      </nav>
    </header>
  );
};

export default Header;
