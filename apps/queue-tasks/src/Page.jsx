import React, { useState } from "react";
import { Button, TaskContainer, ProgressBar, Task } from "./components";

const Page = () => {
  const [taskName, setTaskName] = useState("");
  const [taskData, setTaskData] = useState([]);

  const createNewTask = () => {
    setTaskData((prev) => [
      ...prev,
      { name: taskName, no: (taskData.length || 0) + 1},
    ]);
    setTaskName("");
  };

  const buildTask = () =>
    taskData.map((t) => <Task taskName={t.name} taskNo={t.no} />);

  return (
    <div className="flex flex-col items-center gap-5 justify-center h-screen p-5">
      <TaskContainer>{buildTask()}</TaskContainer>
      <div className="flex items-center gap-5">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded-lg w-[400px]"
          placeholder="Enter task name..."
        />
        <Button
          title="Create"
          onClick={createNewTask}
          disabled={taskName.trim().length == 0}
        />
      </div>
    </div>
  );
};

export default Page;
