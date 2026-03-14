import { useEffect } from "react";

const useScrollCallback = (action: () => void) => {
  useEffect(() => {
    action();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

    if (isBottom) action();
    
  };
};

export default useScrollCallback;
