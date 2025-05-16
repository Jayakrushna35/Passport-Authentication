const express = require("express");
const expresslayout = require("ejs-layouts");
const app = express();
const dotenv = require("dotenv");
const path = require("path")
const indexroute = require("./routes/index");
const userroute = require("./routes/user");


//EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/",indexroute);
app.use("/user",userroute);

const PORT = process.env.PORT || 5000;

app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`)
});