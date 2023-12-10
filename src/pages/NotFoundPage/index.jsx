import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styled from 'styled-components';
import image404 from '../../assets/404.jpg';

const NotFoundPage = () => {
  return (
    <Container>
      <Img src={image404} alt={image404} />
      <Title>Página no encontrada</Title>
      <Paragraph>
        Lo sentimos, la página que estás buscando no existe.
      </Paragraph>
      <Link to="/">
        <Button>Volver</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
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

const Img = styled.img`
  width: 170px;
  @media screen and (width >= 768px) {
    width: 250px;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 10px;
  @media screen and (width >= 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
  @media screen and (width >= 768px) {
    font-size: 1.4rem;
  }
`;

export default NotFoundPage;
