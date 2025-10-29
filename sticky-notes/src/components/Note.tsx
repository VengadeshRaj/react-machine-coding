import React from "react";

type NoteProps = {
  message: string;
  position: { x: number; y: number };
};

export default function Note(props: NoteProps) {
  const { message, position } = props;
  console.log("position", position);
  return (
    <div
      className="note-container"
      style={{ top: position.x, left: position.y }}
    >
      📌{message}
    </div>
  );
}
