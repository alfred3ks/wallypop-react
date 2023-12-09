import styled from 'styled-components';
import defaultPhoto from '../assets/default-image.webp';

// eslint-disable-next-line react/prop-types
const Photo = ({ photo }) => {
  return <Img src={photo ? photo : defaultPhoto} alt={photo} />;
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: fill;
`;

export default Photo;
