import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

// Metodo para crear un anuncio:
export const createAdvert = (advert) => {
  return client.post(advertsUrl, advert);
};
