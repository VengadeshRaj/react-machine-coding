import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

type AccordianType = {
  title: string;
  contents: string[];
};

const Accordian = (props: AccordianType) => {
  const { title, contents } = props;
  const [status, setStatus] = useState<"OPEN" | "CLOSE">("CLOSE");

  const buildAccordianContent = () =>
    contents.map((content, i) => (
      <li className="p-2" key={`cont-${i}`}>
        {content}
      </li>
    ));

  const onAccordianClick = () => {
    setStatus((prev) => (prev === "OPEN" ? "CLOSE" : "OPEN"));
  };

  return (
    <div
      className="flex flex-col p-3 border-b-2 border-black-600 cursor-pointer hover:bg-gray-100 rounded"
      onClick={() => onAccordianClick()}
    >
      <div className="flex flex-row justify-between hover:text-blue-600">
        <h2 className="font-medium text-left">{title}</h2>
        <ToggleButton status={status} onClick={() => onAccordianClick()} />
      </div>
      <div className="">
        {status === "OPEN" && (
          <ul>
            <li>{buildAccordianContent()}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordian;
