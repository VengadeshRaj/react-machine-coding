import useProgress from "./hooks/useProgress";

const ProgressBar = () => {
  const percentage = useProgress();

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-200 gap-5">
      <h1 className="text-2xl font-bold">Progress Bar</h1>
      <div className="w-[300px] h-[15px] border-[2px] border-gray-800 rounded-full">
        <div
          className={`h-full bg-green-500 rounded-full flex flex-row items-center h-full justify-center`}
          style={{ width: `${percentage}%` }}
        >
          <h1 className="text-[10px] font-bold">{percentage}%</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;