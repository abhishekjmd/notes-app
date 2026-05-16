import { Router } from "express";
import { searchNotes } from "../controllers/search.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.get("/", authenticate, searchNotes);

export default router;
