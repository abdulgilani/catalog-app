import express from "express";
import notesRoute from "./routes/noteRoutes/noteRoutes.js";
import { rateLimiter } from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(5001, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
