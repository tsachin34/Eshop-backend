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

router.post("/getproductbyid", async (req, res) => {
  const productid = req.body.productid;
  console.log(productid)

  try {
    const product = await Product.findOne({ _id: productid });
    if (product) {
      return res.send({ success: true, data: product });
    } else {
      return res.status(404).json({ message: "Product not found." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
