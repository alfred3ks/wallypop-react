import { useEffect, useState } from 'react';
import { getLatesAdverts } from '../service';
import Content from '../../../components/layout/Content';
import Advert from '../../../components/Advert';
import EmptyList from '../../../components/EmptyList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <Container>
          {adverts.map(({ id, ...advert }) => (
            <div key={id}>
              <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                <Advert {...advert} />
              </Link>
            </div>
          ))}
        </Container>
      ) : (
        <EmptyList message={'Para ver los anuncios debes estar autenticado.'} />
      )}
    </Content>
  );
};

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  place-items: center;

  @media screen and (width >=768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media screen and (width >=1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
`;

export default AdvertsPage;
