import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    runInterval();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [percentage]);

  const runInterval = () => {
    const id = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    setIntervalId(id);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-200 gap-5">
      <h1 className="text-2xl font-bold">Progress Bar</h1>
      <div className="w-[300px] h-[15px] border-[2px] border-gray-800 rounded-full">
        <div
          className={`h-full bg-green-500 rounded-full flex flex-row items-center h-full justify-center`}
          style={{ width: `${percentage}%` }}
        >
          <h1 className="text-[10px] font-bold">{percentage}%</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;