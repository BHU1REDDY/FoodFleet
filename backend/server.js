import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";
//server.js file
//app config

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose
    .connect(
      "mongodb+srv://tempraj000:0sn74swkS5JO2yAF@cluster0.oj0hr7q.mongodb.net/FoodFleet"
    )
    .then(() => {
      isConnected = true;
      console.log("Db connected");
    });
}

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is working!");
});

export default app;

// app.listen(port, () => {
//   console.log(`Server started on https://localhost:${port}`);
// });
// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from Vercel!" });
// }

// mongodb+srv://tempraj000:0sn74swkS5JO2yAF@cluster0.oj0hr7q.mongodb.net/?
