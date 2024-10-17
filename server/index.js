import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import Razorpay from "razorpay";
//
import cors from "cors";
//const cors = require('cors');



//const jwt = require (' jsonwebtoken');
import jwt from 'jsonwebtoken';



dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_PAY_ID,
  key_secret: process.env.RAZORPAY_PAY_SECRET,
});

const app = express();

// using middlewares
app.use(express.json());
app.use(cors());




const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/uploads", express.static("uploads"));

// importing routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";
import { paymentRouter } from "./routes/payment.routes.js";

// using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);
app.use('/api/v1/payment' , paymentRouter)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
