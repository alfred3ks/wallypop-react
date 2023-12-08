/* eslint-disable react/prop-types */
import Photo from './Photo';

// eslint-disable-next-line react/prop-types
const Advert = ({ name, sale, price, photo, tags }) => {
  return (
    <article>
      <div>
        <Photo photo={photo} />
      </div>
      <div>
        <p>{name}</p>
        <p>{price}€</p>
        <p>{sale ? 'compra' : 'venta'}</p>
        <div>
          <span>Tags:</span> {tags.join(', ')}
        </div>
      </div>
    </article>
  );
};

export default Advert;
