import React, { useState } from "react";

const StopWatch = () => {
  const [timerValue, setTimerValue] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<any>(null);

  const startClick = () => {
    if (!intervalId) {
      const intrId = setInterval(() => {
        setTimerValue((prev) => prev + 1);
      }, 1000);
      setIntervalId(intrId);
    }
  };

  const stopClick = () => {
    if (intervalId) clearInterval(intervalId);
  };
  const resetClick = () => {
    if (intervalId) clearInterval(intervalId);
    setTimerValue(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 gap-5 font-bold font-mono bg-gray-100">
      <h1 className="text-5xl p-5">Stopwatch!</h1>
      <div>
        <div>
          <h3 className="text-center text-3xl">Timer : {timerValue}</h3>
        </div>
        <div className="flex flex-row gap-3 m-10">
          <button
            className={`${
              !!timerValue ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
            }  text-white font-bold py-2 px-4 rounded`}
            onClick={startClick}
            disabled={!!timerValue}
          >
            Start
          </button>
          <button
            className={`${
              !!!timerValue
                ? "bg-gray-300 text-gray-400 "
                : "bg-gray-300 hover:bg-gray-400 text-gray-800 "
            } font-bold py-2 px-4 rounded`}
            onClick={stopClick}
            disabled={!!!timerValue}
          >
            Stop
          </button>
          <button
            className={`${
              !!!timerValue
                ? "bg-gray-300 text-gray-400 "
                : "bg-gray-300 hover:bg-gray-400 text-gray-800 "
            } font-bold py-2 px-4 rounded`}
            onClick={resetClick}
            disabled={!!!timerValue}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
