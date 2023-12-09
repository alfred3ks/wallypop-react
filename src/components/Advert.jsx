/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Photo from './Photo';

// eslint-disable-next-line react/prop-types
const Advert = ({ name, sale, price, photo, tags }) => {
  return (
    <Container>
      <Photo photo={photo} />
      <div>
        <Paragraph>{name}</Paragraph>
        <Paragraph>{price}€</Paragraph>
        <Paragraph>{sale ? 'compra' : 'venta'}</Paragraph>
        <Tags>Tags:{tags.join(', ')}</Tags>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #c6f3f3;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #0e4564;
  margin-top: 5px;
`;

const Tags = styled.p`
  font-size: 1.6rem;
  color: #0e4564;
  margin-top: 5px;
`;

export default Advert;
