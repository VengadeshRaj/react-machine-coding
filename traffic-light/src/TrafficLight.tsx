import React, { useEffect, useState } from "react";
import Light from "./components/Light";

type LightStatus = "ON" | "OFF";

type LightInfo = {
  red: LightStatus;
  yellow: LightStatus;
  green: LightStatus;
};

const TrafficLight = () => {
  const [lightInfo, setLightInfo] = useState<LightInfo>({
    red: "ON",
    yellow: "OFF",
    green: "OFF",
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (lightInfo.red == "ON") {
      timeoutId = setTimeout(() => {
        setLightInfo({
          red: "OFF",
          yellow: "ON",
          green: "OFF",
        });
      }, 3000);
    } else if (lightInfo.yellow == "ON") {
      timeoutId = setTimeout(() => {
        setLightInfo({
          red: "OFF",
          yellow: "OFF",
          green: "ON",
        });
      }, 500);
    } else {
      timeoutId = setTimeout(() => {
        setLightInfo({
          red: "ON",
          yellow: "OFF",
          green: "OFF",
        });
      }, 4000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lightInfo]);

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
