import { useEffect, useRef, useState } from "react";

const ProgressBar = (props) => {
  const { onComplete } = props;
  const [percentage, setPercentage] = useState(0);
  const loading = percentage < 100;
  const intervalRef = useRef();

  const progressComplete = () => {
    clearInterval(intervalRef.current);
    onComplete();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        else {
          progressComplete();
          return prev;
        }
      });
    }, 200);
  }, []);

  return (
    <div className={`h-4 border border-1 rounded-full bg-gray-200`}>
      <div
        className={`h-full rounded-full ${loading ? "bg-blue-600" : "bg-green-600"} text-xs`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="flex justify-end">
        <div className=" font-semibold mx-4">{`${percentage}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
