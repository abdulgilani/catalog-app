import Note from "../../model/Note.js";

// Get all notes controller
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error obtaining notes: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a specific note controller
export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error obtaining a specific notes: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Post a note controller
export const postNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({ message: "Note posted successfully!" });
  } catch (error) {
    console.error("Error posting a note: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a note controller
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });

    if (!updatedNote) res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error updating a note: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) res.status(404).json({ message: "Note not found" });
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("Error deleting a note: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
