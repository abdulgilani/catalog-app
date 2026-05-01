import toast from "react-hot-toast";

import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import formatDate from "../lib/utils.js";
import api from "../lib/axios.js";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // remove the navigator behaviour

    if (!window.confirm("Are you sure you want to delete this brew?")) return;

    try {
      await api.delete(`notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // remove the deleted ones
      toast.success("Brew deleted successfully!");
    } catch (error) {
      console.log("Error in handling delete: ", error);
      toast.error("Failed to delete brew");
    }
  };

  return (
    <Link
      to={`/brew/${note._id}`}
      className="card bg-mocha hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-light-coffee"
    >
      <div className="card-body">
        <h3 className="card-title text-light-coffee">{note.title}</h3>
        <p className="text-light-coffee/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-light-coffee/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
