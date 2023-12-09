import styled from 'styled-components';
import defaultPhoto from '../assets/default-image.webp';

// eslint-disable-next-line react/prop-types
const Photo = ({ photo }) => {
  return <Img src={photo ? photo : defaultPhoto} alt={photo} />;
};

const Img = styled.img`
  width: 280px;
  border-radius: 10px;
`;

export default Photo;
