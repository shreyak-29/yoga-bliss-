import { Router } from "express";
import { createOrder } from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.post("/", createOrder);

export { paymentRouter };