import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Task = (props) => {
  const { taskName, taskNo } = props;
  const [taskDone, setTaskDone] = useState(false);

  const taskOnComplete = () => {
    setTaskDone(true);
  };
  return (
    <div className="p-2 m-2">
      <div className="border border-gray-200 rounded-md flex flex-col gap-2 space-between p-5 bg-gray-100">
        <div className="flex flex-row gap-2 justify-between px-2">
          <div className="flex flex-col">
            <label className="font-semibold">Queue No: {taskNo}</label>
            <label className="text-2xl font-semibold">{taskName}</label>
          </div>
          <label
            className={`items-end text-lg font-semibold ${taskDone ? "text-green-700" : "text-gray-500"}`}
          >
            {taskDone ? "Completed!" : "In Progress..."}
          </label>
        </div>
        <div className="p-2">
          <ProgressBar onComplete={taskOnComplete} />
        </div>
      </div>
    </div>
  );
};

export default Task;
