import { useState } from "react";

interface NoteInputProps {
    onAdd: (title: string, body: string) => void;
}
export default function NoteInput({onAdd}: NoteInputProps) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();         // prevent refreshing after submit
        const t = title.trim();     // .trim() to remove whitespace before and after
        const b = body.trim();
        if (!t && !b) return;        // simple guard: returns if note is empty
        onAdd(t, b);
        setTitle("");               //resets title and body after submit
        setBody("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="Write your note..." value={body} onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Add Note</button>
        </form>
    );
}