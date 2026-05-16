import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { createTag, getTags } from "../controllers/tags.controller.js";

const router = Router();

router.use(authenticate);

router.post("/", createTag);
router.get("/", getTags);

export default router;
