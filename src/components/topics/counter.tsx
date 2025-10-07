import React, { useState } from "react";
import '../../styles/counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increament=()=>{
    setCounterValue((prev)=> prev+1);
  }
  const decreament=()=>{
    setCounterValue((prev)=> prev-1);
  }
  return (
    <div className="counter">
      <div>
        <h1>Counter</h1>
        <h2>{counterValue}</h2>
      </div>
      <div>
        <button onClick={() => increament()}>
          +
        </button>
        <button disabled={!counterValue} onClick={() => decreament()}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
