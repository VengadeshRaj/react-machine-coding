import { useState, useEffect } from "react";

type Age = {
  years: number;
  months: number;
  days: number;
};

export function useAgeCalculate(dob: string) {
  const [ageMessage, setAgeMessage] = useState("");

  useEffect(() => {
    calculate(dob);
  }, [dob]);

  function calculate(newDob: string) {
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
    resetAgeFormat({ years, months, days });
  }
  const resetAgeFormat = (age: Age) => {
    let ageSting = "";
    if (age.years) ageSting += `${age.years} years `;
    if (age.months) ageSting += `${age.months} months `;
    if (age.days) ageSting += `${age.days} days`;

    setAgeMessage(ageSting);
  };

  return ageMessage;
}
