import express from 'express'
import staticsticUser from "../datas/staticsticInfor.js";

const router = express.Router

router.get("/staticstic", (req,res) => {
    res.json({
        staticsticUser
    })
})
export default router