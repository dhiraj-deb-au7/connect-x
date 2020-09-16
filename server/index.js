import express, { urlencoded, json } from "express";
import cors from "cors";
import "dotenv/config";

import "./configs/dbConnection";
import { signupRoute } from "./routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// Routes
app.use("/signup", signupRoute);

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server homepage!");
});
