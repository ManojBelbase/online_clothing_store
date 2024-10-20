import express from "express";
import { createUser } from "../Controller/user.controller.js";
const router = express.Router();

router.post("/signup", createUser);

export default router;
