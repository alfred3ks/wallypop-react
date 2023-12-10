import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const EmptyList = ({ message }) => {
  return (
    <Container>
      <Text>{message}</Text>
      <Button as={Link} to={'/adverts/new'} $variant={'primary'}>
        Crear anuncio
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  place-items: center;
`;

const Text = styled.p`
  margin: 10px 0;
  font-size: 1.6rem;
`;

export default EmptyList;
