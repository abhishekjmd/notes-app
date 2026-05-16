import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: { message: "Too many requests from this IP, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/register", authRateLimiter, register);
router.post("/login", authRateLimiter, login);

export default router;
