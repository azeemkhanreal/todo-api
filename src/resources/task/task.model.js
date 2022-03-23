import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const Task = mongoose.model("task", taskSchema);
export default Task;
