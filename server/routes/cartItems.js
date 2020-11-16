const express = require("express");
const cart = express.Router();
const cartItems = [
  {
    id: 0,
    name: "Milk",
    price: "3.00",
  },
  {
    id: 1,
    name: "Bread",
    price: "4.00",
  },
  {
    id: 2,
    name: "Cereal",
    price: "5.00",
  },
];
cart.get("/", (req, res) => {
  res.json(cartItems);
});
cart.post("/", (req, res) => {
  console.log("Adding new cart Item", req.body);
  cartItems.push(req.body);
  res.json(cartItems);
});
cart.put("/:id", (req, res) => {
  console.log("Id", req.params.id);
  console.log("body", req.body);
  res.json({
    id: req.params.id,
    body: req.body,  
  });
});
cart.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  cartItems.splice(req.params.id, 1);
  res.json({
    id: req.params.id,
    itemDeleted: cartItems,
  });
});

module.exports = cart;
