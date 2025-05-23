import express from "express";
import {
  login,
  register,
  verifyToken,
} from "../controllers/authenthication.controllers.js";
import {
  createOrder,
  getAllOrders,
  getUsersOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/data.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verifytoken", verifyToken);

router.post("/orders", createOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:userId", getUsersOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
