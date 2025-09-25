import type { Note } from "../types/types";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onToggleImportant: (id: string) => void;
}
export default function NoteItem({
  note,
  onDelete,
  onToggleImportant,
}: NoteItemProps) {
  return (
    <div className={note.important ? "bookmark" : ""}>
      <div className="bg-yellow-200 mt-4 px-2 pt-5 shadow-sm shadow-slate-400">
        <h2 className="text-lg font-bold">{note.title}</h2>

        <p className="text-sm mb-2">{note.body}</p>
        <div className="flex justify-between pb-2 items-center">
          <small>{note.createdAt.toLocaleString().split("T")[0]}</small>
        </div>
      </div>
      <div className="flex justify-end mt-2 mb-4">
            <button
              className="text-xs border rounded-sm mr-1 px-1 text-cyan-700 hover:cursor-pointer hover:bg-cyan-700 hover:text-yellow-50"
              onClick={() => onToggleImportant(note.id)}
            >
              {note.important ? "Unpin" : "Pin"}
            </button>

            <button
              className=" text-xs border rounded-sm px-1 text-red-500 hover:cursor-pointer hover:bg-red-500 hover:text-yellow-50"
              onClick={() => onDelete(note.id)}
            >
              Delete
            </button>
          </div>
    </div>
  );
}
