import React from "react";
import { Accordian } from "./components";
import { FAQS } from "./constants";

const FAQ = () => {
  const buildFAQ = () =>
    Object.entries(FAQS).map(([fqa, ans]) => (
      <Accordian title={fqa} contents={ans} />
    ));

  return (
    <div className="flex flex-col items-center gap-5 p-3">
      <h1 className="text-5xl font-bold p-5">Frequently Asked Questions</h1>
      <div className="border border-black-600 p-5 rounded w-full">
        {buildFAQ()}
      </div>
    </div>
  );
};

export default FAQ;
