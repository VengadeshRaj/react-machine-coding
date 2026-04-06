import { ReactNode } from "react";
import useRotate from "./hooks/useRotate";

type CarouselProps = {
  children: ReactNode[];
};

const Carousel = ({ children }: CarouselProps) => {
  const [index, next, previous] = useRotate(children?.length);

  return (
    <div className="flex flex-row gap-3 text-white text-5xl font-bold rounded-md p-4">
      <button
        className="rounded p-3 self-center bg-green-500 hover:bg-green-600"
        onClick={() => previous()}
      >
        {"<"}
      </button>
      <div>{children[index]}</div>
      <button
        className="rounded p-3 self-center bg-green-500 hover:bg-green-600"
        onClick={() => next()}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
