import { useState } from 'react';

// const capitalizeFirstLetter = (input) => {
//   return input.charAt(0).toUpperCase() + input.slice(1);
// };

// const Input = ({ label, id, type, value, onChange }) => {
//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     const capitalizedValue = capitalizeFirstLetter(inputValue);
//     onChange(capitalizedValue);
//   };

//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <br />
//       <input type={type} id={id} value={value} onChange={handleInputChange} />
//     </div>
//   );
// };

const NewAdvertPage = () => {
  const [advert, setAdvert] = useState({
    name: '',
    sale: true,
    tags: [],
    price: '',
    photo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(advert);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdvert((currentAdvert) => {
      return {
        ...currentAdvert,
        [name]:
          name === 'tags'
            ? value.split(',')
            : name === 'price'
            ? parseFloat(value)
            : name === 'sale'
            ? value === 'compra'
            : value,
      };
    });
  };

  return (
    <div>
      <h2>Producto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del producto:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={advert.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="type">Tipo de producto:</label>
        <br />
        <select
          id="type"
          name="sale"
          value={advert.sale ? 'compra' : 'venta'}
          onChange={handleChange}
        >
          <option value="compra">Compra</option>
          <option value="venta">Venta</option>
        </select>
        <br />

        <label htmlFor="tags">Introduce los Tags separados por comas:</label>
        <br />
        <input
          type="text"
          id="tags"
          name="tags"
          value={advert.tags}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="price">Precio:</label>
        <br />
        <input
          type="text"
          id="price"
          name="price"
          value={advert.price}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="photo">Foto del producto:</label>
        <br />
        <input type="file" id="photo" name="photo" onChange={handleChange} />
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewAdvertPage;
