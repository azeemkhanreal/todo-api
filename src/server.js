import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connect } from "./util/db.js";
import userRouter from "./resources/user/user.router.js";
import taskRouter from "./resources/task/task.router.js";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);
app.get("/", (req, res) => {
  res.end("this is home ");
});
const PORT = process.env.PORT || 5000;
export const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost/${PORT} `);
    });
  } catch (err) {
    console.log(err);
  }
};
