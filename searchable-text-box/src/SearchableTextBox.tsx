import { useRef, useState } from "react";
import { FRUITS } from "./constants";

export default function SearchableTextBox() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const timerRef: any = useRef({});

  const textBoxOnChange = (newValue: string) => {
    if (timerRef?.current?.timerId) clearTimeout(timerRef.current.timerId);

    if (newValue) {
      timerRef.current.timerId = setTimeout(() => {
        const newSuggestions = FRUITS.filter((fruit) =>
          fruit.toLocaleLowerCase().startsWith(newValue.toLocaleLowerCase())
        );

        setSuggestions([...newSuggestions]);
      }, 1000);
    }
    else  setSuggestions([]);
  };

  const buildSuggestionsList = () => {
    if (suggestions.length == 0) return <ul className="invisible "></ul>;
    return (
      <ul className="bg-white p-2 mt-1 bg-gray-100">
        {suggestions.map((fruitName) => (
          <li className="focus:bg-blue-400 p-2 border">{fruitName}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col gap-5 items-center h-screen justify-center bg-gray-200">
      <h1 className="font-bold text-3xl text-orange-500">
        Search Any Fruit! 🍍🥭🍎🍉
      </h1>
      <div>
        <input
          className="border border-gray-800 w-[300px] p-1 rounded"
          onChange={(e) => textBoxOnChange(e.target.value)}
        />
        {buildSuggestionsList()}
      </div>
    </div>
  );
}
