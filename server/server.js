const express = require("express");
const app = express();
const port = process.env.port || 3000;

const cartRoutes = require("./routes/cartItems");

const cors = (req, res) => {
  res.setHeader("Access-control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "Get, Post, Put, Delete");
  next();
};

app.use(express.json());
app.use(cors);
app.use("api/cart-items", cartRoutes);

app.listen(port, () => {
  console.log("Hey Server is started on port", port);
});
