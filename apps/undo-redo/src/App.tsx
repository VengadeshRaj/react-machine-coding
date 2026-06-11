import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState<string>("");
  const [removedValues, setRemovedValues] = useState<string[]>([]);

  const undoClick = () => {
    const texts = textValue.split("");
    if (texts.length) {
      const lastLetter = texts.pop() || "";
      setTextValue(texts.join(""));
      setRemovedValues((prev) => [...prev, lastLetter]);
    }
  };

  const redoClick = () => {
    if (removedValues.length) {
      const removedCopy = JSON.parse(JSON.stringify(removedValues));
      const previousValue = removedCopy.pop() || "";
      setTextValue(() => textValue + previousValue);
      setRemovedValues(removedCopy);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row gap-5">
        <label className="text-xl">Enter any value : </label>
        <input
          value={textValue}
          className="border border-1 border-black rounded p-1 w-[350px]"
          onChange={(e) => setTextValue(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-5">
        <button
          className="border border-1 border-white text-white px-3 py-1 rounded bg-blue-500 hover:bg-blue-600"
          onClick={redoClick}
        >
          Redo
        </button>
        <button
          className="border border-1 border-white text-white px-3 py-1 rounded bg-green-500 hover:bg-green-600"
          onClick={undoClick}
        >
          Undo
        </button>
      </div>
    </div>
  );
}

export default App;
