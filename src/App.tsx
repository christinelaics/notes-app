import { useState } from "react";
import type { Note } from "./types/types";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

export default function App() {
  // app-level state shape
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <div>
      <NoteInput />
      <NoteList notes={notes} />
    </div>
  );
}
