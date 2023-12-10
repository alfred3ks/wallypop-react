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
        <NavLinkStyled to="/adverts/new" replace>
          Crear anuncio
        </NavLinkStyled>
        <NavLinkStyled to="/adverts" end>
          Anuncios
        </NavLinkStyled>
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
  position: sticky;
  top: 0;
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
  color: #0e4564;

  @media screen and (width >=768px) {
    padding-bottom: 0px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: #0e4564;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  &.active {
    color: rgb(242, 160, 29);
  }
  @media screen and (width >=768px) {
    font-size: 1.6rem;
  }
`;

export default Header;
