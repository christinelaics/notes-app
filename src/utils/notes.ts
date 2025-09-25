import type { Note } from "../types/types";

export function addNoteLogic(notes: Note[], title: string, body: string) {
    const newNote: Note = {
        id: crypto.randomUUID(),
        title,
        body,
        createdAt: new Date,
        important: false
    };
    return [newNote, ...notes];
}

export function deleteNoteLogic(notes: Note[], id: string) {
    return notes.filter((note)=> note.id !== id);
}

export function toggleImportantLogic(notes: Note[], id: string) {
    return notes.map((note) => (note.id === id ? {...note, important: !note.important} : note));
}