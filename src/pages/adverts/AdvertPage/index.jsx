import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { deleteAdvert, getAdvert } from '../service';
import Content from '../../../components/layout/Content';
import Photo from '../../../components/Photo';
import Loading from '../../../components/Loading';
import { useAuth } from '../../auth/useAuth';
import Button from '../../../components/Button';
import styled from 'styled-components';

const AdvertPage = () => {
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const advert = await getAdvert(id);
        setAdvert(advert);
      } catch (err) {
        if (err.status === 404) {
          navigate('/404');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAdvert();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (confirmDelete) {
      try {
        await deleteAdvert(id);
        navigate('/');
      } catch (err) {
        console.error('Error al borrar el anuncio', err);
      }
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <Content title={'Detalle de un anuncio.'}>
      <Container>
        {loading ? (
          <Loading message={'Cargando...'} />
        ) : (
          advert && (
            <ContainerAdvert>
              <Title>{advert.name}</Title>
              <PhotoContainer>
                <Photo photo={advert.photo} />
              </PhotoContainer>
              <Paragraph>Tipo: {advert.sale ? 'compra' : 'venta'}</Paragraph>
              <Paragraph>Precio: {advert.price}€</Paragraph>
              <Tags>Tags: {advert.tags.join(', ')}</Tags>
              {isLogged && (
                <>
                  <Button onClick={handleDelete}>
                    {confirmDelete ? 'Confirmar Borrar' : 'Borrar Anuncio'}
                  </Button>
                  {confirmDelete && (
                    <Button
                      onClick={() => setConfirmDelete(false)}
                      style={{ marginLeft: '10px' }}
                    >
                      Cancelar
                    </Button>
                  )}
                </>
              )}
            </ContainerAdvert>
          )
        )}
      </Container>
    </Content>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerAdvert = styled.div`
  width: 300px;
  padding: 15px;
  background-color: #c6f3f3;
  border-radius: 10px;

  @media screen and (width >= 768px) {
    width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0e4564;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PhotoContainer = styled.div`
  width: 100%;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #0e4564;
  margin-top: 5px;
`;

const Tags = styled.p`
  font-size: 1.8rem;
  color: #0e4564;
  margin-top: 5px;
  margin-bottom: 25px;
`;

export default AdvertPage;
