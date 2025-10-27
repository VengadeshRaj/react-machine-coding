import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(50);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-200 gap-5">
      <h1 className="text-2xl font-bold">Progress Bar</h1>
      <div className="w-[300px] h-[15px] border-[2px] border-gray-800 rounded-full">
        <div
          className={`w-[${percentage}%] h-full bg-green-500 rounded-full flex flex-row items-center h-full justify-center`}
        >
          <h1 className="text-[10px] font-bold">{percentage}%</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
