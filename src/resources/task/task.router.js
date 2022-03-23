import express from "express";
import controllers from "./task.controller.js";
const router = express.Router();
import { protect } from "../../util/auth.js";
// router.get("/", controllers.getMany);
router
  .route("/")
  .get(protect, controllers.getMany)
  .post(protect, controllers.createOne);

router
  .route("/:id")
  .get(protect, controllers.getOne)
  .put(protect, controllers.updateOne)
  .delete(protect, controllers.removeOne);

export default router;
