import express from "express";
import {
  getAllNotes,
  postNote,
  updateNote,
  deleteNote,
} from "../../controller/notesController/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", postNote);

router.patch("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
