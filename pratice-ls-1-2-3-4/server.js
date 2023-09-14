import express from 'express'
import authenticatedmdw from './middleware/authenticatedMiddleware.js';
import appRouter from './routes/index.js'
import 'dotenv/config'

const app = express();

const PORT = 3001;

app.use(express.json())
app.use(authenticatedmdw)
app.use("/api/v1", appRouter);
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
})
