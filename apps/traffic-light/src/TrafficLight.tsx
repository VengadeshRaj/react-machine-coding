import Light from "./components/Light";
import useTrafficTimer from "./hooks/useTrafficTimer";

const TrafficLight = () => {
  const lightInfo = useTrafficTimer();

  return (
    <div className="flex flex-col items-center bg-gray-300 h-screen gap-5 p-5">
      <h1 className="text-3xl">Traffic light!</h1>
      <div className="flex flex-col gap-0.5">
        <Light colour="red" status={lightInfo.red} />
        <Light colour="yellow" status={lightInfo.yellow} />
        <Light colour="green" status={lightInfo.green} />
      </div>
    </div>
  );
};

export default TrafficLight;
