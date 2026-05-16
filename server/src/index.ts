import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import tagsRoutes from "./routes/tags.routes.js";
import searchRoutes from "./routes/search.routes.js";
import metaRoutes from "./routes/meta.routes.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/", metaRoutes);        // /about, /openapi.json
app.use("/", authRoutes);        // /register, /login
app.use("/notes", notesRoutes);  // /notes, /notes/:id
app.use("/tags", tagsRoutes);    // /tags
app.use("/search", searchRoutes);// /search?q=
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
