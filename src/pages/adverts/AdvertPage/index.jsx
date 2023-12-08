import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { deleteAdvert, getAdvert } from '../service';
import Content from '../../../components/layout/Content';
import Photo from '../../../components/Photo';
import Loading from '../../../components/Loading';
import { useAuth } from '../../auth/useAuth';
import Button from '../../../components/Button';

const AdvertPage = () => {
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const advert = await getAdvert(id);
        setAdvert(advert);
      } catch (err) {
        if (err.status === 404) {
          navigate('/404');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAdvert();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await deleteAdvert(id);
      navigate('/');
    } catch (err) {
      console.err('Error al borrar el anuncio', err);
    }
  };

  return (
    <Content title={'Detalle de un anuncio.'}>
      {loading ? (
        <Loading message={'Cargando...'} />
      ) : (
        advert && (
          <div>
            <h2>{advert.name}</h2>
            <Photo photo={advert.photo} />
            <p>Tipo: {advert.sale ? 'compra' : 'venta'}</p>
            <p>Precio: {advert.price}€</p>
            <p>Tags: {advert.tags.join(', ')}</p>
            {isLogged && <Button onClick={handleDelete}>Borrar Anuncio</Button>}
          </div>
        )
      )}
    </Content>
  );
};

export default AdvertPage;
