import React, { useState } from "react";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

type NoteType = {
  position:{ x: number; y: number };
  message: string;
};
export default function StickyNotes() {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNewNote = (newNote: any) => {
    setNotes((prev) => [
      ...prev,
      { position: newNote.position, message: newNote.message },
    ]);
  };
  return (
    <div className="container">
      <AddNote addNewNote={addNewNote} />
      {notes.map((n) => (
        <Note position={n.position} message={n.message} />
      ))}
    </div>
  );
}