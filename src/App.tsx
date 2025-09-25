import { useState } from "react";
import type { Note } from "./types/types";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

export default function App() {
  // app-level state shape
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, body: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      body,
      createdAt: new Date(),
      important: false
    }
    setNotes((prev) => [newNote, ...prev]);
  }

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  const toggleImportant = (id: string) => {
    setNotes((prev) => 
      prev.map((note) => 
        note.id === id ? {...note, important: !note.important} : note
        )
      );
  }

  return (
    <div>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onToggleImportant={toggleImportant}/>
    </div>
  );
}
