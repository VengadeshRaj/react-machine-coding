import React from "react";
import Timer from "../components/topics/Timer";
import Counter from "../components/topics/counter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <Counter />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
