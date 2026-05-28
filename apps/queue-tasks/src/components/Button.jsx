const Button = (props) => {
  const { title, onClick, disabled } = props;
  return (
    <button
      className={`border border-2 px-2 py-1 text-blue-700 rounded-lg hover:bg-gray-100 ${disabled ? "bg-gray-200 text-white border-gray-200" : "border-blue-700"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
