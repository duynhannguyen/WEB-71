import "dotenv/config.js";
import express from "express";
import appRouter from "./routes/index.js";
import apiLoggerMiddleware from "./middlewares/apiLogger.mdw.js";
import { connectToDatabase } from "./config/database.js";
import cors from "cors";

const whitelist = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "PUT, PATCH, GET, DELETE, UPDATE",
};

const app = express();
const PORT = 3001;

// 1. Initiate database connection
connectToDatabase();

// 2. Define middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(apiLoggerMiddleware);

// 3. Define routes
app.use("/api/v1", appRouter);

// 4. Handle error
// ...

// 5. Run server
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
   - Error handling
   - ratelimit
   - CORS
   - DOCS
*/
