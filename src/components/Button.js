const Button = (props) => {
  return (
    <button
      className="w-full hover:bg-gray-100"
      onClick={() => props.setType(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Button;
