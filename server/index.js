import express, { json } from "express";
import "dotenv/config";

import "./configs/dbConnection";
import { signupRoute , loginRoute } from "./routes";

const app = express();
app.use(express.urlencoded({ extended: true }));

// Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// Routes
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server homepage!");
});
