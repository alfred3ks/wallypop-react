import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <Content>&copy;{currentYear} Wallypop</Content>;
};

const Content = styled.footer`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

export default Footer;
