import type { Note } from "../types/types";
import NoteItem from "./NoteItem";

interface NoteListProps {
    notes: Note[],
    onDelete: (id: string) => void;
    onToggleImportant: (id: string) => void;
}
export default function NoteList({notes, onDelete, onToggleImportant}: NoteListProps) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} onToggleImportant={onToggleImportant}/>
            ))}
        </div>
    );
}