import mongoose from "mongoose";

const CONNECTION_URI = "http://localhost:27017";
export const connect = () => {
  mongoose.connect(CONNECTION_URI, { useNewUrlParser: true }, () => {
    console.log("db connected");
  });
};
