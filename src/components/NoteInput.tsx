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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 p-2 border-y">
            <h2 className="py-2 font-medium">Add a New Note</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="font-light text-md pb-1 focus:outline-none"/>
            <textarea placeholder="Write your note..." value={body} onChange={(e) => setBody(e.target.value)} className="font-extralight text-sm focus:outline-none" rows={5} />
            <div className="flex justify-end">
                <button type="submit" className="border rounded-sm text-cyan-700 px-1 hover:cursor-pointer hover:bg-cyan-700 hover:text-yellow-50">Submit</button>
            </div>
            
        </form>
    );
}