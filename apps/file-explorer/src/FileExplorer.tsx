import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Folder, DataFile } from "./components";

interface Item {
  type: "folder" | "file" | "inputFolder" | "inputFile";
  children: Item | {};
  path: string[] | undefined;
}

// interface Items {
//   [key: string]: {
//     children: item;
//   };
// }

export default function FileExplorer() {
  const itemsRef = React.useRef<HTMLUListElement>(null);
  const DEFAULT_NEW_ITEM_VALUE = {
    file: { type: "file" },
    folder: {
      type: "folder",
      children: {},
    },
  };
  const [items, setItems] = useState<Item>({
    children: {
      src: {
        type: "folder",
        children: {
          test: {
            type: "file",
            path: ["src", "test"],
            children:{}
          },
        },
        path: ["src"],
      },
      "package.json": {
        type: "file",
        path: ["package.json"],
      },
    },
    type:"folder",
    path :[]
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
    type: "folder" | "file",
    path: string[] | undefined
  ) => {
    const testResult = addItemToPath(path, items, value, "folder");
    console.log("testResult", testResult);

    const itemCopy = JSON.parse(JSON.stringify(items));
    delete itemCopy.children[folderKey].children[folderKey];
    itemCopy.children[folderKey].children[value] = DEFAULT_NEW_ITEM_VALUE[type];
    setItems({ ...itemCopy });
  };

  const addItemToPath = (
    path: string[] | undefined,
    itemObj: any,
    newItemName: string,
    type: "file" | "folder"
  ) => {
    let newObj = {};
    if (!path || !itemObj[path[0]]) {
      itemObj[newItemName] = { newItemName: DEFAULT_NEW_ITEM_VALUE[type] };
      newObj = { ...itemObj };
    } else {
      newObj = addItemToPath(
        path.slice(1),
        itemObj[path[0]],
        newItemName,
        type
      );
    }
    return newObj;
  };

  function addNewEle (items:any,path:any,orginalPath:any,newEle:any){
  const pathName = path.shift();
  if (path.length >0){
    addNewEle(items.children[pathName],path,orginalPath,newEle)
  }
  else {
    // items.children ={}
    items.children[pathName] = {...items.children[pathName],[pathName]:newEle};
  }
  return items;
  
}

  const addNewFolder = (folderKey: string, path: string[] | undefined) => {
    const itemCopy = JSON.parse(JSON.stringify(items));
    const newEle = {
         [folderKey]: {
        type: "inputFolder",
        path: path ? [...path, folderKey] : [folderKey],
      },
    }
    // itemCopy.children[folderKey].children = {
    //   ...itemCopy.children[folderKey].children,
    //   [folderKey]: {
    //     type: "inputFolder",
    //     path: path ? [...path, folderKey] : [folderKey],
    //   },
    // };
    const newItems = addNewEle(itemCopy,path,path,newEle);
    console.log("items",items)
    console.log("newItems",newItems);
    //setItems({ ...itemCopy });
  };
  const addNewFile = (folderKey: string, path: string[] | undefined) => {
    const itemCopy = JSON.parse(JSON.stringify(items));
    itemCopy.children[folderKey].children = {
      ...itemCopy.children[folderKey].children,
      [folderKey]: {
        type: "inputFile",
        path: path ? [...path, folderKey] : [folderKey],
      },
    };
    setItems({ ...itemCopy });
  };

  const renderChildren = (children: Item | ReactNode | {}) => {
    if (React.isValidElement(children)) {
      return children;
    } else if (typeof children === "object") {
      return buildItems(children as Item);
    }

    return {};
  };

const buildItems = (listItems: Item): ReactNode => {
  if (!listItems.children) return null;

  return Object.entries(listItems.children).map(([key, item]) => {
    switch (item.type) {
      case "folder":
        return (
          <Folder
            key={key}
            name={key}
            children={renderChildren(item)}
            addNewFolder={() => addNewFolder(key, item.path)}
            addNewFile={() => addNewFile(key, item.path)}
          />
        );

      case "inputFolder":
        return (
          <div key={key}>
            <span>📂</span>
            <input
              className="border border-black"
              onBlur={(e) =>
                inputOnBlur(key, e.target.value, "folder", item.path)
              }
            />
          </div>
        );

      case "inputFile":
        return (
          <div key={key}>
            <span>📄</span>
            <input
              className="border border-black"
              onBlur={(e) =>
                inputOnBlur(key, e.target.value, "file", item.path)
              }
            />
          </div>
        );

      default:
        return <DataFile key={key} name={key} />;
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
