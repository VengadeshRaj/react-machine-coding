import React, { useState } from "react";

type ToggleButtonType = {
  status: "OPEN" | "CLOSE";
  onClick: () => void;
};

const ToggleButton = ({ status, onClick }: ToggleButtonType) => {
  return (
    <button
      className="font-medium text-2xl w-[25px] hover:bg-gray-200 rounded"
      onClick={() => onClick()}
    >
      {status === "OPEN" ? "-" : "+"}
    </button>
  );
};
export default ToggleButton;
