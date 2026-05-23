import React, { useEffect, useRef } from "react";

const useToastTimer = (event: () => void, isOpen: boolean) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const DELAY = 2000;

  useEffect(() => {
    if (isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => event(), DELAY);
    }
  }, [isOpen, event]);
};

export default useToastTimer;
