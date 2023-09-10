import express from "express"
import appRouter from "./routes/index.js"
import  apiKeyMiddleware  from "./middleware/apiKeyMiddleware.js"
import logRequestMiddleware from "./middleware/logRequest.js"

const app= express()
const PORT = 3001
app.use(apiKeyMiddleware,logRequestMiddleware)
app.use("/api/v1", appRouter)
app.listen(PORT, () => {
    console.log(`this app is running at PORT ${PORT}`);
})





