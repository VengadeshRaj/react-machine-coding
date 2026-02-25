import { useState } from "react";

export default function AgeCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [dob, setDob] = useState("");
  const [age, setAage] = useState({ years: 0, months: 0, days: 0 });

  const QuestionSection = () => {
    const dobOnChange = (newDob: string) => {
      setDob(newDob);

      const today = new Date();
      const birthDate = new Date(newDob);

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      console.log({ years, months, days });
      setAage({ years, months, days });
    };
    return (
      <div className="bg-black text-orange-700 flex flex-col h-screen items-center justify-center gap-5 font-bold">
        <h1 className=" text-2xl">Select Your Date Of Birth </h1>
        <input
          type="date"
          className="border border-orange-600 border-2 rounded w-72 p-1 text-center"
          value={dob}
          onChange={(e) => dobOnChange(e.target.value)}
        />
        <button
          className="border border-2 border-orange-600 rounded px-3 py-1"
          onClick={() => setIsCalculated(true)}
        >
          Calculate
        </button>
      </div>
    );
  };

  const getAge = () => {
    let ageSting = "";
    if (age.years) ageSting += `${age.years} years `;
    if (age.months) ageSting += `${age.months} months `;
    if (age.days) ageSting += `${age.days} days`;

    return ageSting;
  };

  const AnswerSection = () => {
    return (
      <div className="bg-black text-orange-700 flex flex-col h-screen items-center justify-center gap-5 font-bold">
        <h1 className=" text-2xl">You are {getAge()} old!</h1>
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
