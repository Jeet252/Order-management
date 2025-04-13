import express from "express";
import cors from "cors";
import routes from "./codes/routes/routes.js";
import connectDB from "./codes/database/database.connection.js";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/api", routes); // Prefix routes with /api

const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
