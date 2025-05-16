const express = require("express");
const router = express.Router();

//Login Page 
router.get("/login",(req,res) => 
  res.send("login")
);
//Logout Page 
router.get("/logout",(req,res) => 
  res.send("logout")
);
//Register Page 
router.get("/register",(req,res) => 
  res.send("Register")
);

module.exports = router;