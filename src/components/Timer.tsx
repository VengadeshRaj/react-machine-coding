import React, { useRef, useState } from "react";

const Timer = () => {
  const [timerValue, setTimerValue] = useState(0);
  const timerStarted = Boolean(timerValue);
  const intervalRef: any = useRef(null);

  const startClick = () => {
    intervalRef.intervalId = setInterval(() => {
      setTimerValue((prev) => prev + 1);
    }, 1000);
  };

  const stopClick = () => {
    if (intervalRef.intervalId) clearInterval(intervalRef.intervalId);
  };

  const resetClick = () => {
    if (intervalRef.intervalId) clearInterval(intervalRef.intervalId);
    setTimerValue(0);
  };

  return (
    <div>
      <h1>{timerValue}</h1>
      <button onClick={() => startClick()}>Start</button>
      <button disabled={!timerStarted} onClick={() => stopClick()}>
        Stop
      </button>
      <button disabled={!timerStarted} onClick={() => resetClick()}>
        reset
      </button>
    </div>
  );
};

export default Timer;
