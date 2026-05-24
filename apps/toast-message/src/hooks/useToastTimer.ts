import React, { useEffect, useRef } from "react";

const useToastTimer = (event: () => void, isOpen: boolean) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const DELAY = 2000;

  const clerTimeOut =()=>{
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  useEffect(() => {
    if (isOpen) {
      clerTimeOut()
      timerRef.current = setTimeout(() => event(), DELAY);
    }
    return clerTimeOut
  }, [isOpen, event]);
};

export default useToastTimer;
