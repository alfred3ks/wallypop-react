import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteAdvert, getAdvert } from '../service';
import Content from '../../../components/layout/Content';
import Photo from '../../../components/Photo';
import { useAuth } from '../../auth/useAuth';
import Button from '../../../components/Button';
import styled from 'styled-components';

const AdvertPage = () => {
  const [advert, setAdvert] = useState(null);
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
        {!isLogged ? (
          <Message>
            <Text>Para ver el detalle de un anuncio debes estar logueado.</Text>

            <Link to="/login">
              <Button>Iniciar sesión</Button>
            </Link>
          </Message>
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

const Message = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media screen and (width >= 768px) {
    width: 500px;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: #0e4564;
  margin-bottom: 15px;
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
