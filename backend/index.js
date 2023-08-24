const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { logDOM } = require("@testing-library/react");

constproducts = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const uri = process.env.MONGOLAB_URI;
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`);
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connection established...')).catch((error) => console.error("MongoDB connection failed:", error.message))

