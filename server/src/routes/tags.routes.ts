import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { createTag, getTags } from "../controllers/tags.controller";

const router = Router();

router.use(authenticate);

router.post("/", createTag);
router.get("/", getTags);

export default router;
