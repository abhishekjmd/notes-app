import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller";

const router = Router();

// All note routes require authentication
router.use(authenticate);

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
