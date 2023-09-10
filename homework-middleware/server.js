import express from "express"
import appRouter from "./routes/index.js"
import  apiKeyMiddleware  from "./middleware/apiKeyMiddleware.js"
import logRequestMiddleware from "./middleware/logRequest.js"
import staticsticUser from './datas/staticsticInfor.js';
const app= express()
const PORT = 3001
app.get(('/system/staticstic'), (req,res)=>{
    res.json({
        staticsticUser
    })
})
app.use(apiKeyMiddleware,logRequestMiddleware)
app.use("/api/v1", appRouter)
app.listen(PORT, () => {
    console.log(`this app is running at PORT ${PORT}`);
})





