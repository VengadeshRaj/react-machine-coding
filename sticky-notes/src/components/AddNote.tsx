import React, { useState } from "react";

type AddNoteProps = {
  addNewNote: (newNote: {
    message: string;
    position: { x: number; y: number };
  }) => void;
};

export default function AddNote(props: AddNoteProps) {
  const { addNewNote } = props;
  const [message, setMessage] = useState("");

  const getRandomPostion = () => {
    const randomPosition = {
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    };
    return randomPosition;
  };

  const addClick = (e: any) => {
    e.preventDefault();
    addNewNote({ position: getRandomPostion(), message: message });
    setMessage("");
  };

  return (
    <form className="new-note-container">
      <input
        type="text"
        className="note-input"
        placeholder=" Add new note here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="add-btn" type="submit" onClick={(e) => addClick(e)}>
        Add
      </button>
    </form>
  );
}