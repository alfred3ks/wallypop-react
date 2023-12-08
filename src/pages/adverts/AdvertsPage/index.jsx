import { useEffect, useState } from 'react';
import { getLatesAdverts } from '../service';
import Content from '../../../components/layout/Content';
import Advert from '../../../components/Advert';
import EmptyList from '../../../components/EmptyList';
import { Link } from 'react-router-dom';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      const adverts = await getLatesAdverts();
      setAdverts(adverts);
    };

    fetchAdverts();
  }, []);

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
        <EmptyList message={'Para ver los anuncios debes estar autenticado.'} />
      )}
    </Content>
  );
};

export default AdvertsPage;
