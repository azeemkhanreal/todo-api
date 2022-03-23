import mongoose from "mongoose";

const CONNECTION_URI = "mongodb://localhost:27017/todos";
export const connect = () => {
  mongoose.connect(CONNECTION_URI, () => {
    console.log("db connected");
  });
};
