import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

// Método para crear un anuncio:
export const createAdvert = (advert) => {
  return client.post(advertsUrl, advert);
};

// Método para obtener el listado de anuncios:
export const getLatesAdverts = () => {
  const url = `${advertsUrl}`;
  return client.get(url);
};
