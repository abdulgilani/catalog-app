export const getAllNotes = (req, res) => {
  res.status(200).send("5 notes awaiting");
};

export const postNote = (req, res) => {
  res.status(201).json({ message: "Posted note successfully!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "Updated note successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Deleted note successfully!" });
};
