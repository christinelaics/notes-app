// AAA: Arrange -> Act -> Assert
/// <reference types="vitest/globals" />
import type { Note } from "../../types/types";
import { addNoteLogic, deleteNoteLogic, toggleImportantLogic } from "../notesLogic";

//test for addNote
test("addNoteLogic adds a new note", () => {
    const notes: Note[] = [];
    const result = addNoteLogic(notes, "Title", "Body");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Title");
    expect(result[0].body).toBe("Body");
});

//test for toggleImportant
test("toggleImportantLogic toggles boolean important to true", () => {
    const notes = [{id: "1", title: "test", body: "test", createdAt: new Date('test'), important: false}];
    const result = toggleImportantLogic(notes, "1");
    expect(result[0].important).toBe(true);
});

//test for deleteNote
test("deleteNoteLogic deletes an existing note", () => {
    const notes = [{id: "1", title: "test", body: "test", createdAt: new Date('test'), important: false}];
    const result = deleteNoteLogic(notes, "1");
    expect(result).toHaveLength(0);
})