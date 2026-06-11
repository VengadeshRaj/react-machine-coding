import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row gap-5">
        <label className="text-xl">Enter any value : </label>
        <input className="border border-1 border-black rounded p-1 w-[350px]" />
      </div>
      <div className="flex flex-row gap-5">
        <button className="border border-1 border-white text-white px-3 py-1 rounded bg-blue-500 hover:bg-blue-600">
          Redo
        </button>
        <button className="border border-1 border-white text-white px-3 py-1 rounded bg-green-500 hover:bg-green-600">
          Undo
        </button>
        
      </div>
    </div>
  );
}

export default App;
