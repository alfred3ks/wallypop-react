import { Link } from 'react-router-dom';
import AuthButton from '../AuthButton';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1>Wallypop</h1>
      </Link>
      <nav>
        <AuthButton />
      </nav>
    </header>
  );
};

export default Header;
