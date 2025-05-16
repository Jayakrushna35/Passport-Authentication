const express = require("express");
const app = express();
const dotenv = require("dotenv");
const indexroute = require("./routes/index");
const userroute = require("./routes/user");

app.use("/",indexroute);
app.use("/user",userroute);

const PORT = process.env.PORT || 5000;

app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`)
});