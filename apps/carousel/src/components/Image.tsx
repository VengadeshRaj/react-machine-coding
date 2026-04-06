import React from "react";

type ImageProps = {
  src: string;
};
const Image = ({ src }: ImageProps) => {
  return <img src={src} loading="lazy" className="size-80 rounded" />;
};

export default Image;
