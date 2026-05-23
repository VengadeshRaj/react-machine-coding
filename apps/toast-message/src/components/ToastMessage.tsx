import { ReactElement, useContext } from "react";
import { ToastContext } from "../providers/ToastProvider";
import {
  FailureIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../images/icons";
import useToastTimer from "../hooks/useToastTimer";
import { ToastValueType } from "../types/ToastMessage.type";

const ToastMessage = () => {
  const [toastValues, setToastValues] = useContext(ToastContext) as [
    ToastValueType,
    any,
  ];
  useToastTimer(close, toastValues.isOpen);

  function close() {
    setToastValues({ ...toastValues, isOpen: false });
  }

  const TOAST_STYLE: Record<ToastValueType["type"], string> = {
    success: "border-green-700 bg-green-100 text-green-700",
    info: "border-blue-700 bg-blue-100 text-blue-700",
    warning: "border-orange-700 bg-orange-100 text-orange-700",
    failure: "border-red-700 bg-red-100 text-red-700",
  };

  const TOAST_ICONS: Record<ToastValueType["type"], ReactElement> = {
    success: <SuccessIcon />,
    info: <InfoIcon />,
    warning: <WarningIcon />,
    failure: <FailureIcon />,
  };

  return (
    <>
      {toastValues.isOpen && (
        <div
          className={`fixed top-6 inset-x-0 flex justify-center transform transition-all transition-all duration-300 ease-out`}
        >
          <div
            className={`relative flex flex-row border p-5 text-lg rounded-lg justify-center w-[500px] font-semibold ${TOAST_STYLE[toastValues.type]}`}
          >
            <div className="flex flex-row gap-2 items-center">
              {TOAST_ICONS[toastValues.type]}
              <div className="">{toastValues.message}</div>
            </div>
            <button className={`absolute top-0 right-0 p-2`} onClick={close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastMessage;
