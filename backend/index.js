import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("5 notes awaiting");
});

app.listen(5001, () => {
  console.log("Server listening on port 5001");
});
