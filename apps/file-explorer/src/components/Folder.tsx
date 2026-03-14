import { ReactElement, useState } from "react";

type FolderProps = {
  name: string;
  children?: any;
  addNewFolder: () => void;
  addNewFile: () => void;
};

const Folder = (props: FolderProps) => {
  const { name, children, addNewFolder, addNewFile } = props;
  const [showAddOpts, setShowAddOpts] = useState(false);
  const [showItems, setShowItems] = useState(true);

  const AddButton = () => {
    return (
      <div className="flex flex-row gap-2 rounded">
        <button
          className="border bg-gray-300 hover:bg-gray-400 rounded h-5 p-1 h-full justify-center px-2"
          onClick={() => setShowAddOpts((pre) => !pre)}
        >
          +
        </button>
        <div className="relative">
          {showAddOpts && (
            <ul className="flex flex-col bg-white p-1 gap-1 absolute w-max">
              <li
                className="border px-1 rounded cursor-pointer hover:bg-gray-300"
                onClick={() => {
                  setShowItems(true);
                  setShowAddOpts(false);
                  addNewFolder();
                }}
              >
                📂Folder
              </li>
              <li
                className="border px-1 rounded cursor-pointer hover:bg-gray-300"
                onClick={() => {
                  setShowItems(true);
                  setShowAddOpts(false);
                  addNewFile();
                }}
              >
                📄File
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  };

  const arrowClick = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-5 bg-gray-200 p-1">
        <li className="font-medium">📂{name}</li>
        <div className="flex gap-2">
          <AddButton />
          <button
            className="border bg-gray-300 hover:bg-gray-400 rounded h-5 p-1 h-full justify-center px-2"
            onClick={() => arrowClick()}
          >
            {showItems ? "^" : "▾"}
          </button>
        </div>
      </div>
      {showItems && <ul className="mx-5">{children}</ul>}
    </div>
  );
};

export default Folder;
