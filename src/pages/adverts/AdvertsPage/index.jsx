import { useEffect, useState } from 'react';
import { getLatesAdverts } from '../service';
import Content from '../../../components/layout/Content';
import Advert from '../../../components/Advert';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

const EmptyList = () => {
  return (
    <div>
      <p>No puedes ver los anuncios si no estas autenticado.</p>

      <Button as={Link} to={'/login'} $varaint={'primary'}>
        Iniciar sesión
      </Button>
    </div>
  );
};

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      const adverts = await getLatesAdverts();
      setAdverts(adverts);
    };

    fetchAdverts();
  }, []);

  console.log(adverts);

  return (
    <Content title={'Listado de anuncios'}>
      {adverts.length ? (
        <div>
          {adverts.map(({ id, ...advert }) => (
            <div key={id}>
              <Link to={`${id}`}>
                <Advert {...advert} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </Content>
  );
};

export default AdvertsPage;
