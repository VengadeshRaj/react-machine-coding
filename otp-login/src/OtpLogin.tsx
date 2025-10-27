import React, { useState, useRef, RefObject } from "react";
import OtpInput from "./components/OtpInput";
import OtpButton from "./components/OtpButton";

type OTP = {
  place1: string;
  place2: string;
  place3: string;
  place4: string;
};

type OtpRef = {
  [key: string]: RefObject<HTMLInputElement | HTMLButtonElement | null>;
};

const OtpLogin = () => {
  const [otp, setOtp] = useState<OTP>({
    place1: "",
    place2: "",
    place3: "",
    place4: "",
  });

  const otpRef: OtpRef = {
    inputRef1: useRef(null),
    inputRef2: useRef(null),
    inputRef3: useRef(null),
    inputRef4: useRef(null),
    submitRef: useRef(null),
  };

  const doAutoFocus = () => {
    for (let key in otpRef) {
      if (otpRef.hasOwnProperty(key) && !otpRef[key].current?.value) {
        otpRef[key].current?.focus();
        break;
      }
    }
  };

  const otpOnChange = (value: string, place: keyof OTP) => {
    setOtp({ ...otp, [place]: value });
    doAutoFocus();
  };

  const submitBtnClick = () => {
    
  };
  const cancelBtnClick = () => {};
  return (
    <div className="flex flex-col items-center gap-5 p-5 h-screen justify-center bg-gray-800">
      <h1 className="text-3xl font-bold text-white">Enter the OTP</h1>
      <div className="flex flex-row gap-2">
        <OtpInput
          value={otp.place1}
          onChange={(value) => otpOnChange(value, "place1")}
          ref={otpRef.inputRef1}
        />
        <OtpInput
          value={otp.place2}
          onChange={(value) => otpOnChange(value, "place2")}
          ref={otpRef.inputRef2}
        />
        <OtpInput
          value={otp.place3}
          onChange={(value) => otpOnChange(value, "place3")}
          ref={otpRef.inputRef3}
        />
        <OtpInput
          value={otp.place4}
          onChange={(value) => otpOnChange(value, "place4")}
          ref={otpRef.inputRef4}
        />
      </div>
      <div className="flex flex-row gap-3">
        <OtpButton
          varient="primary"
          ref={otpRef.submitRef}
          onClick={submitBtnClick}
        >
          Submit
        </OtpButton>
        <OtpButton varient="secondary" onClick={cancelBtnClick}>
          Resend
        </OtpButton>
      </div>
    </div>
  );
};

export default OtpLogin;
