import { useEffect, useState } from 'react';
import { createAdvert } from '../service';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

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
    <Container>
      <Title>Crear un Anuncio</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nombre del producto:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Label htmlFor="type">Tipo de producto:</Label>
        <Select name="sale" value={formData.sale} onChange={handleChange}>
          <option value={false}>Venta</option>
          <option value={true}>Compra</option>
        </Select>

        <Label htmlFor="tags">Tags separados por comas:</Label>
        <Input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />

        <Label htmlFor="price"> Precio:</Label>
        <Input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <Label htmlFor="photo">Foto del producto:</Label>
        <Input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />

        <Button $variant={'primary'} type="submit" disabled={buttonDisabled}>
          {!isFeching ? 'Enviar' : 'Enviando...'}
        </Button>
      </Form>
      {error && <Message>{error.message}</Message>}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  padding: 20px;
  margin: auto;
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media screen and (width >= 768px) {
    width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Message = styled.div`
  color: #ff0000;
  text-align: center;
  margin-top: 10px;
`;

export default NewAdvertPage;
