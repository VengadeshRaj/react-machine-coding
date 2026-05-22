import React, { createContext, useState } from "react";
import { ToastValueType } from "../types/ToastMessage.type";

export const ToastContext = createContext({});

const ToastProvider = ({ children }: any) => {
  const [toastValues, setToastValues] = useState<ToastValueType>({
    isOpen: false,
    type: "info",
    message: "",
  });

  return (
    <ToastContext.Provider value={[toastValues, setToastValues]}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
