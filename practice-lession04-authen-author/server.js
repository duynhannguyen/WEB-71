import express from 'express';
import appRouter from './routes/index.js';
import apiLoggerMiddleware from './middleware/apiLogger.mdw.js';
import 'dotenv/config'


const app = express();
const PORT = 3001;


app.use(express.json());

app.use('/api/v1', appRouter);
app.use(apiLoggerMiddleware);


app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
