const mongoose = require("mongoose");

var mongoDBURL = "mongodb://127.0.0.1:27017/Eshop";

// var mongoDBURL =
//   "mongodb+srv://sachin:sachinn@webapp.dfgyymo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

// console.log(dbconnect.addListener());

dbconnect.on("error", () => {
  console.log("connection failed");
});

dbconnect.on("connected", () => {
  console.log("Sucessfulll");
});

module.exports = mongoose;
