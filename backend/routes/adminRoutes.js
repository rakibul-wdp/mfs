import express from "express";
import {
  approveAgent,
  addMoneyToAgent,
} from "../controllers/adminController.js";
import {
  authMiddleware,
  roleMiddleware,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);
router.use(roleMiddleware(["admin"]));

router.patch("/approve-agent/:agentId", approveAgent);
router.post("/add-money", addMoneyToAgent);

export default router;
