const SIZE = 32;

type CloseButtonProps = {
  onClick: () => void;
};

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="cursor-pointer p-1 hover:bg-gray-700 rounded-full"
      onClick={(e) => {e.stopPropagation();
        onClick()}}
    >
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
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="6" y1="18" x2="18" y2="6" />
      </svg>
    </button>
  );
}
