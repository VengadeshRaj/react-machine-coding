import React from "react";

type ImageProps = {
  src: string;
};
const Image = ({ src }: ImageProps) => {
  return <img src={src} loading="lazy" className="size-80 border border-4 border-blue-300 rounded-md p-1" />;
};

export default Image;
