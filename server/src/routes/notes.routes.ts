import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  shareNote,
} from "../controllers/notes.controller";
import { attachTagToNote, removeTagFromNote } from "../controllers/tags.controller";

const router = Router();

// All note routes require authentication
router.use(authenticate);

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.post("/:id/share", shareNote);
router.post("/:id/tags", attachTagToNote);
router.delete("/:id/tags/:tagId", removeTagFromNote);

export default router;
