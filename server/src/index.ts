import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/auth.routes";
import notesRoutes from "./routes/notes.routes";
import tagsRoutes from "./routes/tags.routes";
import searchRoutes from "./routes/search.routes";
import metaRoutes from "./routes/meta.routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/tags", tagsRoutes);
app.use("/api/search", searchRoutes);
app.use("/", metaRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
