import { useState, useEffect } from "react";
import { LoaderCircle, ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";

import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching brew: ", error);
        toast.error("Failed to fetch brew");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this brew?")) return;

    try {
      await api.delete(`notes/${id}`);
      toast.success("Brew deleted!");
      navigate("/");
    } catch (error) {
      console.log("Error in handling delete: ", error);
      toast.error("Failed to delete brew");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("All fields are required to make a brew!");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Brew updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the brew: ", error);
      toast.error("Failed to update brew");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderCircle className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Brews
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <Trash2Icon className="size-5" />
            Delete Brew
          </button>

          <div className="card bg-mocha">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Brew Title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Make your brew here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Making..." : "Make Brew"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
