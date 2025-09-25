/// <reference types="vitest/globals" />
import {render, screen, fireEvent} from '@testing-library/react';
import NoteInput from '../../components/NoteInput';

//test NoteInput
test("allows user to add a note", () => {
    const handleAdd = vi.fn();
    render(<NoteInput onAdd={handleAdd} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const bodyInput = screen.getByPlaceholderText("Write your note...");

    fireEvent.change(titleInput, { target: { value: "Test title"}});
    fireEvent.change(bodyInput, {target: {value: "Test Body"}});
    fireEvent.submit(titleInput);

    expect(handleAdd).toHaveBeenCalledWith("Test title", "Test Body");
}); 