import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log("Error connecting to MONGODB: ", error);
    process.exit(1);
  }
};
