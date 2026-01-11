import { useRef } from "react";

export default function SearchBox() {
  const timerRef: any = useRef(null);

  const debouncedSearch = (value: string) => {
    if (timerRef?.timerId) {
      clearTimeout(timerRef.current.timerId);
    }
    timerRef.timerId = setTimeout(() => {
      alert(value);
    }, 3000);
  };
  return (
    <div className="p-2">
      <input
        placeholder="Search messages..."
        className="border bg-gray-700 rounded w-full p-2 hover:ring"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
}
