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
  margin-bottom: 10px;
  font-size: 2.4rem;
`;

export default Content;
