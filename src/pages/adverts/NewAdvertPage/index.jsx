import { useEffect, useState } from 'react';
import { createAdvert } from '../service';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router';

const NewAdvertPage = () => {
  const [isFeching, setIsFeching] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    sale: true,
    tags: [],
    price: '',
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: name === 'tags' ? value.split(',') : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'photo') {
          if (value instanceof File) {
            formDataToSend.append(key, value);
          }
        } else {
          formDataToSend.append(key, value);
        }
      });
      setIsFeching(true);
      const advert = await createAdvert(formDataToSend);
      navigate(`../${advert.id}`, { relative: 'path' });
    } catch (err) {
      if (err.status === 401) {
        navigate('/login');
      } else {
        setIsFeching(false);
        setError(err);
      }
    }
  };

  useEffect(() => {
    const errorTime = setTimeout(() => {
      setError(null);
      return () => {
        clearTimeout(errorTime);
      };
    }, 3000);
  }, [error]);

  const { name, sale, tags, price } = formData;
  const buttonDisabled = !(name && sale && tags && price) || isFeching;

  return (
    <div>
      <h2>Crear un nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre del producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="type">Tipo de producto:</label>
          <select name="sale" value={formData.sale} onChange={handleChange}>
            <option value={false}>Venta</option>
            <option value={true}>Compra</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags">Tags separados por comas:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="price"> Precio:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="photo">Foto del producto:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <Button $variant={'primary'} type="submit" disabled={buttonDisabled}>
          {!isFeching ? 'Enviar' : 'Enviando...'}
        </Button>
      </form>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default NewAdvertPage;
