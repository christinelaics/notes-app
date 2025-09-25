import type { Note } from "../types/types";
import NoteItem from "./NoteItem";

interface NoteListProps {
    notes: Note[],
    onDelete: (id: string) => void;
}
export default function NoteList({notes, onDelete}: NoteListProps) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete}/>
            ))}
        </div>
    );
}