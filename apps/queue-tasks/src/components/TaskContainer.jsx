const TaskContainer = ({ children }) => {
  return (
    <div className="h-[700px] border border-gray-200 w-full rounded">
      {children}
    </div>
  );
};

export default TaskContainer;
