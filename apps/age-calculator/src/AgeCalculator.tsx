import { useState } from "react";
import { useAgeCalculate } from "./hooks/useAgeCalculate";

export default function AgeCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [dob, setDob] = useState("");
  const ageMessage = useAgeCalculate(dob);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const QuestionSection = () => {
    const onCalculate = () => {
      if (!ageMessage) {
        setShowErrorMsg(true);
      } else setIsCalculated(true);
    };
    return (
      <div className="bg-black text-orange-700 flex flex-col h-screen items-center justify-center gap-5 font-bold">
        <h1 className=" text-2xl">Select Your Date Of Birth </h1>
        <input
          type="date"
          className="border border-orange-600 border-2 rounded w-72 p-1 text-center"
          value={dob}
          onChange={(e) => {
            setShowErrorMsg(false);
            setDob(e.target.value);
          }}
        />
        <button
          className="border border-2 border-orange-600 rounded px-3 py-1"
          onClick={() => onCalculate()}
        >
          Calculate
        </button>
        {showErrorMsg && (
          <h3 className="text-red-800">Please enter valid Date of Birth</h3>
        )}
      </div>
    );
  };

  const AnswerSection = () => {
    return (
      <div className="bg-black text-orange-700 flex flex-col h-screen items-center justify-center gap-5 font-bold">
        <h1 className=" text-2xl">You are {ageMessage} old!</h1>
        <button
          className="border border-2 border-orange-600 rounded px-3 py-1"
          onClick={() => setIsCalculated(false)}
        >
          Recalculate
        </button>
      </div>
    );
  };
  return !isCalculated ? <QuestionSection /> : <AnswerSection />;
}
