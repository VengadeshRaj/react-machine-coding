import { useRef } from "react";

interface SearchBoxProps {
  onChange:(value:string)=> void
}

export default function SearchBox({onChange}:SearchBoxProps) {
  return (
    <div className="p-2">
      <input
        placeholder="Search messages..."
        className="border bg-gray-700 rounded w-full p-2 hover:ring"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
