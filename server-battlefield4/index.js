const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/connect");
const serverInfo = require("./routes/serverInfo");

const app = express();
dotenv.config();

// { origin: process.env.CORS_ORIGIN, credentials: false }
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON

app.use("/api", serverInfo);

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️ Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
