import React from "react";
import "../styles/global.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
