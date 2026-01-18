require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database AFTER dotenv
connectDB();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("AI LMS Backend Running");
});

app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
