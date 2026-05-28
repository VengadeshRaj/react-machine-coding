const TaskContainer = ({ children }) => {
  return (
    <div className="h-[700px] overflow-y-auto border border-gray-200 w-full rounded">
      {children}
    </div>
  );
};

export default TaskContainer;
