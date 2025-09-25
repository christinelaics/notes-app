import type { Note } from "../types/types"

interface NoteItemProps {
    note: Note;
    onDelete: (id: string) => void;
}
export default function NoteItem({note, onDelete}: NoteItemProps) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <small>{note.createdAt.toLocaleString()}</small>
            <button onClick={()=> onDelete(note.id)}>Delete</button>
        </div>
    )
}