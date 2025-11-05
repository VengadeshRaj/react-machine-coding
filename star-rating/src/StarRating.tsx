import React from "react";
import Button from "./components/button";
import Star from "./components/Star";

const StarRating = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center font-bold">
      <input type="text"/>
      <Button varient="primary" text="Submit"/>
      <Button varient="secondary" text="Cancel"/>
      <Star />
    </div>
  );
};

export default StarRating;
