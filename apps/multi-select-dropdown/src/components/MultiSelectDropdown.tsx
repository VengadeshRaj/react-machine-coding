import React, { useState } from "react";

type MultiSelectProps = {
  options: string[];
  title: string;
};

const MultiSelect = (props: MultiSelectProps) => {
  const { title, options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  return (
    <div
      className="flex flex-row gap-2 items-center"
      onClick={() => setIsOpen((pre) => !pre)}
    >
      <label className="font-bold text-xl">{title} : </label>
      <div className="border border-black border-2 w-72 h-10 rounded cursor-text">
        {isOpen && (
          <div>
            <input />
            <ul></ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
