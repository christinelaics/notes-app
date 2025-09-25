import type { Note } from "../types/types";
import NoteItem from "./NoteItem";

interface NoteListProps {
    notes: Note[]
}
export default function NoteList({notes}: NoteListProps) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note}/>
            ))}
        </div>
    );
}