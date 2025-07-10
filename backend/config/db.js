import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tempraj000:0sn74swkS5JO2yAF@cluster0.oj0hr7q.mongodb.net/FoodFleet"
    )
    .then(() => console.log("Db connected"));
};
