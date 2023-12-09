import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>{<Outlet />}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;

// Estilos con styled component:
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
  margin: auto;
`;

const Content = styled.main`
  padding: 20px 0;
`;
