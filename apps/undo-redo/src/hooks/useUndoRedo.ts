import { useState } from "react";

type UseUndoRedoType = [
  string,
  (value: string) => void,
  () => void,
  () => void,
];

const useUndoRedo = (): UseUndoRedoType => {
  const [text, setText] = useState<string>("");
  const [removedTexts, setRemovedTexts] = useState<string[]>([]);

  const undo = () => {
    const texts = text.split("");
    if (texts.length) {
      const lastLetter = texts.pop() || "";
      setText(texts.join(""));
      setRemovedTexts((prev) => [...prev, lastLetter]);
    }
  };
  const redo = () => {
    if (removedTexts.length) {
      const removedCopy = JSON.parse(JSON.stringify(removedTexts));
      const previousValue = removedCopy.pop() || "";
      setText(() => text + previousValue);
      setRemovedTexts(removedCopy);
    }
  };

  const textOnChange = (value: string) => setText(value);

  return [text, textOnChange, undo, redo];
};

export default useUndoRedo;
