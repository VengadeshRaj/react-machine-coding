import React from "react";
import Timer from "../components/topics/Timer";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <Timer />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
