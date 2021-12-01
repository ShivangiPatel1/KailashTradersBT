const express = require("express");

const router = express.Router();
const Login = require("../models/login.js");

router.get("/", async (req, res) => {
  try {
    const login = await Login.find();
    res.json(login);
  } catch (err) {
    res.send("Error", +err);
  }
});

router.post("/", async (req, res) => {
  var userFound = await Login.find({"email" :  req.body.email, "password" : req.body.password});
  if (userFound && userFound.length > 0) {
    res.json({isAdmin:true});
  } else {
    res.json({isAdmin:false});
  }
});



module.exports = router;
