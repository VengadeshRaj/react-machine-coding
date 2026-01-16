const SIZE = 32;
const UP_ARROW = "6 15 12 9 18 15";
const DOWN_ARROW = "6 9 12 15 18 9";

type ArrowButtonProps = {
  isOpen: boolean;
  onClick:()=> void;
};

export default function ArrowButton({ isOpen,onClick }: ArrowButtonProps) {
  return (
    <button className="cursor-pointer p-1 hover:bg-gray-700 rounded-full" onClick={()=>onClick}>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox="0 0 24 24"
        fill="none"
        stroke={"white"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={isOpen ? DOWN_ARROW : UP_ARROW} />
      </svg>
    </button>
  );
}
