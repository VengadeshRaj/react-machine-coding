import React from "react";
import { Button, TaskContainer } from "./components";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-screen p-5">
      <TaskContainer>
        
      </TaskContainer>
      <div className="flex items-center">
        <Button title="Create New Task" />
      </div>
    </div>
  );
};

export default Page;
