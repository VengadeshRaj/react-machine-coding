import { FRUITS } from "./constants";
import useDebouncedSearch from "./hooks/useDebouncedSearch";

export default function SearchableTextBox() {
  const [inputValue, suggestions, onChange, reset] = useDebouncedSearch(FRUITS);

  const buildSuggestionsList = () => {
    if (suggestions.length == 0) return <ul className="invisible "></ul>;
    return (
      <ul className="bg-white p-2 mt-1 bg-gray-100">
        {suggestions.map((fruitName) => (
          <li
            className="focus:bg-blue-400 p-2 border cursor-pointer"
            onClick={(e: any) => reset(e.target.innerText)}
          >
            {fruitName}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col gap-5 items-center h-screen justify-center bg-gray-200 font-mono">
      <h1 className="font-bold text-3xl text-orange-500">Search Any Fruit!</h1>
      <div className="">
        <input
          className="border border-gray-800 w-[300px] p-1 rounded"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
        />
        {buildSuggestionsList()}
      </div>
    </div>
  );
}
