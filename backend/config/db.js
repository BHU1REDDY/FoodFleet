import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  await mongoose
    .connect(
      "mongodb+srv://tempraj000:0sn74swkS5JO2yAF@cluster0.oj0hr7q.mongodb.net/FoodFleet"
    )
    .then(() => {
      isConnected = true;
      console.log("Db connected");
    });
};
