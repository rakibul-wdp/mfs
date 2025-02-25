import express from "express";
import { cashIn } from "../controllers/agentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/cash-in", cashIn);

export default router;
