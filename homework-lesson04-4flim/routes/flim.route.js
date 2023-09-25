import express from "express";
import { flimData } from "../data/filmData.js";

const router = express.Router();

router.get("/", (req, res) => {
  const isFreeFlim = flimData.filter((flim) => flim.isFree);

  res.json({
    data: isFreeFlim,
  });
});

export default router;
