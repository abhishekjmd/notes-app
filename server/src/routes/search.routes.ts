import { Router } from "express";
import { searchNotes } from "../controllers/search.controller";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", authenticate, searchNotes);

export default router;
