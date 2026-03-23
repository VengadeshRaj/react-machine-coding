import React, { useEffect, useRef, useState } from "react";
import useDebouncedSearch from "../hooks/useDebouncedSearch";
import useClickOutsideByRef from "../hooks/useClickOutsideByRef";

type MultiSelectProps = {
  options: string[];
  title: string;
};

const MultiSelect = (props: MultiSelectProps) => {
  const { title, options } = props;
  const multiSelectRef = useRef<HTMLDivElement>(null);
  useClickOutsideByRef(multiSelectRef, () => setIsOpen(false));

  const [inputValue, suggestions, onChange, reset] =
    useDebouncedSearch(options);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const buildOptions = () => {
    if (suggestions.length > 0) {
      return suggestions.map((option) => (
        <li className="flex flex-row gap-1 font-medium">
          <input
            type="checkbox"
            className="cursor-pointer"
            name={option}
            checked={selected.includes(option)}
            onChange={(e) => onOptionSelect(e)}
          />
          {option}
        </li>
      ));
    }
    return <li>No Records Found..</li>;
  };

  const onItemRemove = (item: string) => {
    setSelected((prev) => prev.filter((s) => s != item));
  };

  const buildSelectedOptions = () =>
    selected.map((s) => (
      <span className="flex flex-row gap-2 py-1 px-2 h-8 bg-green-100 text-green-600 rounded font-medium rounded-full">
        <span>{s}</span>
        <button className="text-black" onClick={() => onItemRemove(s)}>
          {" "}
          ✕
        </button>
      </span>
    ));

  const onOptionSelect = (event: any) => {
    if (event.target.checked) {
      setSelected([...selected, event.target.name]);
    } else {
      setSelected((prev) => prev.filter((s) => s != event.target.name));
    }
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <label className="font-bold text-xl">{title} : </label>
      <div className="w-80" ref={multiSelectRef}>
        <div
          className="relative flex flex-wrap gap-2 p-1 border border-black border-2 rounded cursor-text min-h-10"
          onClick={() => setIsOpen(true)}
        >
          {buildSelectedOptions()}
        </div>
        {isOpen && (
          <div className="bg-green-100 flex flex-col p-4 rounded absolute mt-1">
            <input
              className="rounded h-8 border border-2 border-black p-1"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => onChange(e.target.value)}
            />
            <ul className="p-1">{buildOptions()}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
