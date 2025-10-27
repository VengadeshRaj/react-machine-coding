import React, { useRef } from "react";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  ref?: any;
};

const OtpInput = (props: OtpInputProps) => {
  const { value, onChange, ref } = props;

  const inputOnClick =()=>{
    ref.current.setSelectionRange(1,1)
  }

  const otpInputOnChange = (value: string) => {
    onChange(value.replace(/[^0-9]/g, ""));
  };
  return (
    <input
      type="text"
      className="border-[2px] border-gray-500 rounded-[7px] w-[45px] h-[45px] text-center text-2xl font-bold"
      maxLength={1}
      value={value}
      onChange={(e) => otpInputOnChange(e.target.value)}
      ref={ref}
      onClick={inputOnClick}
    />
  );
};

export default OtpInput;
