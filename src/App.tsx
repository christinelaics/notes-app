import type { Note } from "./types/types";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { addNoteLogic, deleteNoteLogic, toggleImportantLogic } from "./utils/notesLogic";
import useLocalStorage from "./hooks/useLocalStorage";

const STORAGE_KEY = "notes-list"

export default function App() {
  // app-level state shape
  const [notes, setNotes] = useLocalStorage<Note[]>(STORAGE_KEY, [])

  const addNote = (title: string, body: string) => {
    setNotes((prev) => addNoteLogic(prev, title, body));
  }

  const deleteNote = (id: string) => {
    setNotes((prev) => deleteNoteLogic(prev, id));
  }

  const toggleImportant = (id: string) => {
    setNotes((prev)=> toggleImportantLogic(prev, id));
  }

  return (
    <div className="p-10 bg-yellow-50">
      <h1 className="text-2xl font-bold mb-4">Note App</h1>
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onToggleImportant={toggleImportant}/>
    </div>
  );
}
