import type { Note } from "../types/types"

interface NoteItemProps {
    note: Note;
    onDelete: (id: string) => void;
    onToggleImportant: (id: string) => void;
}
export default function NoteItem({note, onDelete, onToggleImportant}: NoteItemProps) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <small>{note.createdAt.toLocaleString()}</small>
            <button onClick={() => onToggleImportant(note.id)}>{note.important? "Unpin" : "Pin"}</button>
            <button onClick={()=> onDelete(note.id)}>Delete</button>
        </div>
    )
}