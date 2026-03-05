import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import useAccordianActions from "../hooks/useAccordianActions";

type AccordianType = {
  title: string;
  contents: string[];
};

const Accordian = (props: AccordianType) => {
  const { title, contents } = props;
  const [status, accordianClick] = useAccordianActions();

  const buildAccordianContent = () =>
    contents.map((content, i) => (
      <li className="p-2" key={`cont-${i}`}>
        {content}
      </li>
    ));

  return (
    <div
      className="flex flex-col p-3 border-b-2 border-black-600 cursor-pointer hover:bg-gray-100 rounded"
      onClick={() => accordianClick()}
    >
      <div className="flex flex-row justify-between hover:text-blue-600">
        <h2 className="font-medium text-left">{title}</h2>
        <ToggleButton status={status} onClick={() => accordianClick()} />
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
