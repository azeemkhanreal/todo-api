import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({});
const Task = mongoose.model("task", taskSchema);
export default Task;
