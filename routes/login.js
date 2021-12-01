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
 console.log(req.body.email);
 console.log(req.body.password);
  var userFound = await Login.find({"email" :  req.body.email, "password" : req.body.password});
  if (userFound) {
    res.json({isAdmin:true});
  } else {
    res.status(400).json({ msg: `Password and email are not valid ` });
  }
});



module.exports = router;
