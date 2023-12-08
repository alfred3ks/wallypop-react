import Button from './Button';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const EmptyList = ({ message }) => {
  return (
    <div>
      <p>{message}.</p>
      <Button as={Link} to={'/login'} $variant={'primary'}>
        Iniciar sesión
      </Button>
    </div>
  );
};

export default EmptyList;
