import express from "express"
import users from "../datas/users.js";
import staticsticUser from "../datas/staticsticInfor.js";
import staticsticMiddleware from "../middleware/staticsticMiddleware.js";

const router = express.Router();

router.get("/", (req,res) => {
    const { apiKey } = req.query;
    const userIndex = users.findIndex((user) => user.apiKey === apiKey);
    staticsticMiddleware("teacher", userIndex)
    // res.json({
    //     staticsticUser
    // })
})

export default router