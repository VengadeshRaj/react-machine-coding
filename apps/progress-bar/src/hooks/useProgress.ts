import { useEffect, useState } from "react";

export default function useProgress() {
  const DELAY = 25;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearIntervalById(intervalId);
          return 100;
        }
        return prev + 1;
      });
    }, DELAY);
    return () => clearIntervalById(intervalId);
  }, []);

  const clearIntervalById = (id: ReturnType<typeof setInterval>) => {
    if (id) clearInterval(id);
  };

  return percentage;
}
