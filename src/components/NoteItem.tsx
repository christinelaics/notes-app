import type { Note } from "../types/types"

interface NoteItemProps {
    note: Note;
}
export default function NoteItem({note}: NoteItemProps) {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <small>{note.createdAt.toLocaleString()}</small>
            <button>Delete</button>
        </div>
    )
}