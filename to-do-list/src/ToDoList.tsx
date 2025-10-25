import React, { useState } from "react";

const ToDoList = () => {
  const [newItem, setNewItem] = useState("");
  const [workItems, setWorkItems] = useState({
    toDo: ["Test", "Test", "Test"],
    inProgress: ["Test", "Test", "Test"],
    done: ["Test", "Test", "Test"],
  });

  const LeftArrow = ({onClick, itemIndex}:any) => (
    <div onClick={() => onClick(itemIndex)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>
    </div>
  );

const RightArrow = ({ onClick, itemIndex }:any) => (
  <div onClick={() => onClick(itemIndex)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  </div>
);

  const moveItem = (itemIndex: number, currentStatus: string) => {};

  const buildToDoItems = () => (
    <ul className="text-center border border-gray-500 rounded bg-zinc-100 divide-y-2 divide-gray-600 ">
      {workItems.toDo.map((workItem,i) => (
        <li className="flex  justify-between">
          <span className="p-2">{workItem}</span>
          <RightArrow itemIndex={i} onClick={moveItem}/>
        </li>
      ))}
    </ul>
  );
  const buildInProgressItems = () => (
    <ul className="text-center border border-gray-500 rounded bg-zinc-100 bg-yellow-100 divide-y-2 divide-gray-600">
      {workItems.inProgress.map((workItem, i) => (
        <li className="flex justify-between">
          <LeftArrow/>
          <span className="p-2">{workItem}</span>
          <RightArrow />
        </li>
      ))}
    </ul>
  );
  const buildDoneItems = () => (
    <ul className="text-center border border-gray-500 rounded bg-zinc-100 divide-y-2 divide-gray-600 bg-green-300">
      {workItems.done.map((workItem) => (
        <li className="flex justify-between">
          <span className="p-2">{workItem}</span>
        </li>
      ))}
    </ul>
  );

  const addButtonClick = () => {
    setWorkItems({ ...workItems, toDo: [...workItems.toDo, newItem] });
    setNewItem("");
  };

  return (
    <div className="flex flex-col items-center gap-5 p-10 bg-gray-200 h-screen">
      <h1 className="font-bold text-3xl">To Do List✍️</h1>
      <div className="flex flex-row gap-5">
        <input
          className="border border-gray-800 p-2 rounded w-[500px]"
          type="text"
          placeholder="Add your new item here.."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className={`${
            newItem ? "bg-blue-500 hover:bg-blue-700" : "bg-blue-400"
          } text-white px-5 rounded `}
          onClick={addButtonClick}
          disabled={!Boolean(newItem)}
        >
          Add
        </button>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-[400px] rounded ">
          <h2 className="font-bold border p-2 text-center text-xl">To Do 📜</h2>
          {buildToDoItems()}
        </div>
        <div className="w-[400px] rounded ">
          <h2 className="font-bold border p-2 text-center text-xl">
            In Progress 💻
          </h2>
          {buildInProgressItems()}
        </div>
        <div className="w-[400px] rounded ">
          <h2 className="font-bold border p-2 text-center text-xl">Done ✅</h2>
          {buildDoneItems()}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
