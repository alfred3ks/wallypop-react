// eslint-disable-next-line react/prop-types
const Input = ({ label, type, name, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
