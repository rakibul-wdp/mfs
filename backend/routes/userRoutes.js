import express from "express";
import { getUserBalance, sendMoney } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/balance", getUserBalance);
router.post("/send-money", sendMoney);

export default router;
