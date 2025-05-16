const express = require("express");
const router = express.Router();

//Login Page 
router.get("/login",(req,res) => 
  res.render("login")
);
//Logout Page 
router.get("/logout",(req,res) => 
  res.render("dashboard")
);
//Register Page 
router.get("/register",(req,res) => 
  res.render("register")
);

module.exports = router;