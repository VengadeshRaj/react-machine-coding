import React, { useEffect, useRef, useState } from "react";

type LightStatus = "ON" | "OFF";

type LightInfo = {
  red: LightStatus;
  yellow: LightStatus;
  green: LightStatus;
};
const TRAFFIC_OFF_VALUES: LightInfo = {
  red: "OFF",
  yellow: "OFF",
  green: "OFF",
};
const useTrafficTimer = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timeDelay, setTimeDelay] = useState(4000);
  const [lightInfo, setLightInfo] = useState<LightInfo>({
    red: "ON",
    yellow: "OFF",
    green: "OFF",
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLightInfo((prev) => {
        if (prev.red === "ON") {
          setTimeDelay(500);
          return { ...TRAFFIC_OFF_VALUES, yellow: "ON" };
        } else if (prev.yellow === "ON") {
          setTimeDelay(3000);
          return { ...TRAFFIC_OFF_VALUES, green: "ON" };
        } else {
          setTimeDelay(4000);
          return { ...TRAFFIC_OFF_VALUES, red: "ON" };
        }
      });
    }, timeDelay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timeDelay]);

  return lightInfo;
};

export default useTrafficTimer;
