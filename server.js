const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");

var dbconnection = require("./db");
var productsRoute = require("./routes/productsRoutes");
var usersRoute = require("./routes/userRoues");

app.use(cors());
app.use(bodyparser.json());
app.use("/api/products/", productsRoute);
app.use("/api/users/", usersRoute);

app.get("/", (req, res) => {
  res.send("This is from backend");
});

const port = 3002;

app.listen(port, () => console.log("Node Js Server started"));
