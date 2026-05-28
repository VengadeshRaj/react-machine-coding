import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const isDone = percentage < 100;
  const intervalRef = useRef();

  const progressComplete = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        else progressComplete();
      });
    }, 500);
  }, []);

  return (
    <div className={`h-4 border rounded-full border-gray-300`}>
      <div
        className={`h-full rounded-full ${isDone ? "bg-blue-700" : "bg-green-600"}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
