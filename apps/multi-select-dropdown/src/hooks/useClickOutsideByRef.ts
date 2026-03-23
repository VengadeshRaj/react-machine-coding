import { useEffect } from "react";

const useClickOutsideByRef =(ref:React.RefObject<HTMLDivElement | null>,cbFn:()=> void)=>{
      useEffect(() => {
        const handleClickOutside = (e: any) => {
          if (!ref?.current?.contains(e.target)) {
            cbFn()
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

}
export default useClickOutsideByRef