const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", async (req, res) => {
  const products = await Product.find({});
  if (products) {
    if (products.length > 0) {
      return res.send({ sucess: true, count: products.length, data: products });
    } else {
      return res.send({ message: "No products in the model currently" });
    }
  } else {
    return res.status(400).json({ message: "Something went wrong." });
  }
});

module.exports = router;
