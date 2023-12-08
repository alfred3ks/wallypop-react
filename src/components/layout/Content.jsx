// eslint-disable-next-line react/prop-types
const Content = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

export default Content;
