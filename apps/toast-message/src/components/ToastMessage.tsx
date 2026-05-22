import React from "react";
const ToastMessage = () => {
  return (
    <div className="fixed top-6 inset-x-0 flex justify-center">
      <div className="relative flex flex-row  border border-black p-5 text-lg rounded justify-center w-[500px]">
        <div className="">Hello from toast message</div>
        <button className="absolute top-0 right-0 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15"
            height="15"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToastMessage;
