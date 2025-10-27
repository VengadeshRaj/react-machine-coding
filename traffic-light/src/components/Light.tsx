import React from "react";

type LightProps = {
  colour: "yellow" | "red" | "green" | "";
  status: "ON" | "OFF";
};

const Light = (props: LightProps) => {
  const { colour,status } = props;

  const getColour = () => {
    if(status == 'OFF') return "bg-gray-500";
    switch (colour) {
      case "red":
        return "bg-red-600";
      case "yellow":
        return "bg-yellow-500";
      case "green":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="bg-black w-[100px] h-[100px] rounded">
      <div className={`m-4 w-[70px] h-[70px] rounded-full ${getColour()}`} />
    </div>
  );
};

export default Light;
