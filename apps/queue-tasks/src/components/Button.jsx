const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button className="border border-blue-700 border-2 px-4 py-2 text-blue-700 rounded-full hover:bg-gray-100">
      {title}
    </button>
  );
};

export default Button;
