import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../AuthButton';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Link to={'/'}>
        <Title>Wallypop</Title>
      </Link>
      <Nav>
        <NavLink to={'/adverts/new'}>Crear anuncio</NavLink>
        <AuthButton />
      </Nav>
    </Container>
  );
};

// Estilos con styled component:
const Container = styled.header`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0px;
  background-color: #c6f3f3;
  color: #fff;
  a {
    text-decoration: none;
  }

  @media screen and (width >= 768px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  font-size: 3.2rem;
  text-decoration: none;
  color: #0e4564;

  @media screen and (width >=768px) {
    padding-bottom: 0px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    color: #0e4564;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default Header;
