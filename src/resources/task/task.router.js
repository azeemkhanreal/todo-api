import express from "express";
import controllers from "./task.controller.js";
const router = express.Router();

router.route("/").get(controllers.getMany);

router
  .route("/:id")
  .get(controllers.getOne)
  .post(controllers.createOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
