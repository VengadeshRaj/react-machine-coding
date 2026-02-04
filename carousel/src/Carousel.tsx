import { ReactNode } from "react";
import useRotate from "./hooks/useRotate";

type CarouselProps = {
  children: ReactNode[];
};

const Carousel = ({ children }: CarouselProps) => {
  const [index, next, previous] = useRotate(children?.length);

  return (
    <div className="flex flex-row gap-3 text-blue-600 text-5xl font-bold border border-8 border-blue-300 rounded-md p-4">
      <button
        className="border border-blue-600 rounded p-3 self-center border-2 hover:border-4 hover:bg-blue-600 hover:text-white"
        onClick={() => previous()}
      >
        {"<"}
      </button>
      <div>{children[index]}</div>
      <button
        className="border border-blue-600 rounded p-3 self-center border-2 hover:border-4 hover:bg-blue-600 hover:text-white"
        onClick={() => next()}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
