import React, { useState } from "react";

const useRotate = (length: number) => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((prev) => (prev == length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setIndex((prev) => (prev == 0 ? length - 1 : prev - 1));
  };

  return [index, next, previous];
};

export default useRotate;
