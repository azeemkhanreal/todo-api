import express from "express";
import { whoAmI, updateMe } from "./user.controller.js";
const router = express.Router();

router.get("/", whoAmI);
router.put("/", updateMe);

export default router;
