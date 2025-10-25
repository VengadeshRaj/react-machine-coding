import React from "react";

const NoItemsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 w-full h-[300px] bg-white rounded">
      <span className="text-gray-300">--No Items--</span>
    </div>
  );
};

export default NoItemsCard;
