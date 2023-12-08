import defaultPhoto from '../assets/default-image.webp';

// eslint-disable-next-line react/prop-types
const Photo = ({ photo }) => {
  return <img src={photo ? photo : defaultPhoto} alt={photo} width={300} />;
};

export default Photo;
