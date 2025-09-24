import React from "react";
import Timer from "../components/Timer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Timer />
      </div>
      <div>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default HomePage;
