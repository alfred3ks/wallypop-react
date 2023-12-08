import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">
        <Button>Volver</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
