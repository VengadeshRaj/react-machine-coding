import React from "react";
import ToastMessage from "./components/ToastMessage";

const Page = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-200">
      <ToastMessage />
      <div>Contents will be here...</div>
      <div>
        <button>Success Toast</button>
        <button>Failure Toast</button>
        <button>Information Toast</button>
        <button>Warning Toast</button>
      </div>
    </div>
  );
};

export default Page;
