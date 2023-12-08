import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 10px;
  /* font-size: 1.2rem; */
  background-color: #252a3f;
  color: ${(props) => (props.$variant === 'primary' ? '#fff' : '#fff')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  border-radius: 5px;
  border: none;
  text-decoration: none;
  transition: background-color 0.7s;
  cursor: pointer;

  &:hover {
    background-color: #78838b;
  }
`;

export default Button;
