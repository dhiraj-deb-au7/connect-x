import express from "express";

const app = express();

// Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// Homepage
app.use("/", (req, res) => {
  res.send("connect-x server homepage!");
});
