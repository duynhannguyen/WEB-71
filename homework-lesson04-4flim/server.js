import express from "express";
import appRouter from "./routes/index.js";

const app = express();

const PORT = 3001;

app.use("/api/v1", appRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
