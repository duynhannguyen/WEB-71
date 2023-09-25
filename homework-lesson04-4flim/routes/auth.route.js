import express from "express";
import { users } from "../data/user.js";
const router = express.Router();
router.get("/member", (req, res) => {
  res.json({
    message: "You are a guest",
  });
});

export default router;
