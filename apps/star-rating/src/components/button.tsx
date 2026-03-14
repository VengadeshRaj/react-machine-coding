import React from "react";

type ButtonProps = {
  varient: "primary" | "secondary";
  onClick?: () => void;
  text: string;
  className?:string
};

const Button = (props: ButtonProps) => {
    
  const { text, varient,className='' } = props;

  const getButtonColor = () =>
    varient == "primary"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      className={`${getButtonColor()} text-white px-3 py-2 rounded focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
