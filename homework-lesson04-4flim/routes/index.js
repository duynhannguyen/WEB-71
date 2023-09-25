import express from "express";
import authRouter from "./auth.route.js";
import flimRouter from "./flim.route.js";
import checkAccount from "../middleware/checkaccount.mdw.js";
const route = express.Router();

route.use("/auth", checkAccount, authRouter);
route.use("/flim", flimRouter);

export default route;
