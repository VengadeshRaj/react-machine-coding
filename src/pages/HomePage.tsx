import React from "react";
import Timer from "../components/Timer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Timer />
      </div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
