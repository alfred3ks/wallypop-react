import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Content = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div>{children}</div>
    </>
  );
};

// Estilos cons styled component
const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.4rem;
  color: #0e4564;
`;

export default Content;
