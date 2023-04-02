const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      reuire: true,
    },
    commment: {
      type: String,
    },
    rating: {
      type: Number,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
    },
    image: {
      type: String,
      reuire: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      reuire: true,
    },
    price: {
      type: Number,
      reuire: true,
    },
    countInStock: {
      type: Number,
      requireL: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
