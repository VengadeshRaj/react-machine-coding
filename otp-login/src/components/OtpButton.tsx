import React from "react";

type OtpButtonProps = {
  varient: "primary" | "secondary";
  onClick: (value: string) => void;
  children: string;
  ref?: any
};

const OtpButton = (props: OtpButtonProps) => {
  const { varient = "primary", onClick, children,ref } = props;

  const getButtonColor = () =>
    varient == "primary"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      className={`${getButtonColor()} text-white px-3 py-2 rounded focus:outline-none`}
      onClick={() => onClick}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default OtpButton;
