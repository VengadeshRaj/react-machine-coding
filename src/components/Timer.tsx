import React, { useState } from "react";

const Timer = () => {
  const [timerValue, setTimerValue] = useState(0);
  const intervalId = null;

  const startClick = () => {};

  return (
    <div>
      <h1>{timerValue}</h1>
      <button>Start</button>
      <button disabled={!!!timerValue}>Stop</button>
      <button disabled={!!!timerValue}>reset</button>
    </div>
  );
};

export default Timer;
