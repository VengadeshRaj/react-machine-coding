import React from "react";
import Button from "./components/button";
import Star from "./components/Star";

const StarRating = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center font-bold">
      <span className="text-white border border-black-300 bg-red-500 text-5xl">*</span>
      <Button varient="primary" text="Submit"/>
      <Button varient="secondary" text="Cancel"/>
      <Star />
    </div>
  );
};

export default StarRating;
