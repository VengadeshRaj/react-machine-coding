import { useContext } from "react";
import { ToastContext } from "./providers/ToastProvider";

const Page = () => {
  const [, setToastValues] = useContext<any>(ToastContext);

  const onSuccessClick = () => {
    setToastValues({
      isOpen: true,
      type: "success",
      message: "This is the test success toast message",
    });
  };
  const onInfoClick = () => {
    setToastValues({
      isOpen: true,
      type: "info",
      message: "This is the test info toast message",
    });
  };
  const onWarningClick = () => {
    setToastValues({
      isOpen: true,
      type: "warning",
      message: "This is the test warning toast message",
    });
  };
  const onFailureClick = () => {
    setToastValues({
      isOpen: true,
      type: "failure",
      message: "This is the test failure toast message",
    });
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-100 h-screen items-center justify-center">
      <div className="text-3xl">All the application content goes here...</div>
      <div className="flex flex-col gap-5">
        <label className="font-semibold">
          Please click below buttons to test toast message!
        </label>
        <div className="flex flex-row gap-5">
          <button
            className="border px-3 py-1 border-green-700 rounded bg-green-200 text-green-700"
            onClick={onSuccessClick}
          >
            Success
          </button>
          <button
            className="border px-3 py-1 border-blue-700 rounded bg-blue-200 text-blue-700"
            onClick={onInfoClick}
          >
            Infomation
          </button>
          <button
            className="border px-3 py-1 border-orange-700 rounded bg-orange-200 text-orange-700"
            onClick={onWarningClick}
          >
            Warning
          </button>
          <button
            className="border px-3 py-1 border-red-700 rounded bg-red-200 text-red-700"
            onClick={onFailureClick}
          >
            Failure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
