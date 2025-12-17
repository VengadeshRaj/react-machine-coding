import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Folder, DataFile } from "./components";

interface item {
  type: "folder" | "file" | "inputFolder" | "inputFile";
  children?: item | {};
}

interface Items {
  [key: string]: item;
}

export default function FileExplorer() {
  const itemsRef = React.useRef<HTMLUListElement>(null);
  const DEFAULT_NEW_ITEM_VALUE = {
    file: { type: "file" },
    folder: {
      type: "folder",
      children: {},
    },
  };
  const [items, setItems] = useState<Items>({
    src: {
      type: "folder",
      children: {
        test: {
          type: "file",
        },
      },
    },
    "package.json": {
      type: "file",
    },
  });

  useEffect(() => {
    const inputEle = itemsRef.current?.getElementsByTagName("input")[0];
    if (inputEle) {
      inputEle.value = "New";
      inputEle.select();
      inputEle?.focus();
    }
  }, [items]);

  const inputOnBlur = (
    folderKey: string,
    value: string,
    type: "folder" | "file"
  ) => {
    const itemCopy = JSON.parse(JSON.stringify(items));
    delete itemCopy[folderKey].children[folderKey];
    itemCopy[folderKey].children[value] = DEFAULT_NEW_ITEM_VALUE[type];
    setItems({ ...itemCopy });
  };

  const addNewFolder = (folderKey: string) => {
    const itemCopy = JSON.parse(JSON.stringify(items));
    itemCopy[folderKey].children = {
      ...itemCopy[folderKey].children,
      [folderKey]: { type: "inputFolder" },
    };
    setItems({ ...itemCopy });
  };
  const addNewFile = (folderKey: string) => {
    const itemCopy = JSON.parse(JSON.stringify(items));
    itemCopy[folderKey].children = {
      ...itemCopy[folderKey].children,
      [folderKey]: { type: "inputFile" },
    };
    setItems({ ...itemCopy });
  };

  const renderChildren = (children: item | ReactNode | {}) => {
    if (React.isValidElement(children)) {
      return children;
    } else if (typeof children === "object") {
      return buildItems(children as Items);
    }

    return {};
  };

  const buildItems = (listItems: Items): ReactNode => {
    return Object.entries(listItems).map(([key], i) => {
      switch (listItems[key].type) {
        case "folder":
          return (
            <Folder
              name={key}
              children={renderChildren(listItems[key]?.children)}
              addNewFolder={() => addNewFolder(key)}
              addNewFile={() => addNewFile(key)}
            />
          );
        case "inputFolder":
          return (
            <>
              <span>📂</span>
              <input
                className="border border-black"
                onBlur={(e) => inputOnBlur(key, e.target.value, "folder")}
              />
            </>
          );
        case "inputFile":
          return (
            <>
              <span>📄</span>
              <input
                className="border border-black"
                onBlur={(e) => inputOnBlur(key, e.target.value, "file")}
              />
            </>
          );
        default:
          return <DataFile name={key} />;
      }
    });
  };

  return (
    <div className="flex flex-col items-left bg-gray-100 h-screen p-5 w-[500px] gap-2">
      <h1 className="text-3xl font-bold">File explorer</h1>
      <ul ref={itemsRef}>{buildItems(items)}</ul>
    </div>
  );
}
