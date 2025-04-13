import express from "express";
import { login, register } from "../controllers/authenthication.controllers.js";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/data.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.post("/orders", createOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:id", getOrderById);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
