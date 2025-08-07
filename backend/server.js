import express from "express";
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
app.use(
  cors({
    origin: "https://food-fleet-frontend.vercel.app/", // allow frontend
    credentials: true, // if using cookies/auth
  })
);

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

app.listen(port, () => {
  console.log(`Server started on https://localhost:${port}`);
});
// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from Vercel!" });
// }

// mongodb+srv://tempraj000:0sn74swkS5JO2yAF@cluster0.oj0hr7q.mongodb.net/?
