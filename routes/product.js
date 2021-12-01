const express = require("express");

const router = express.Router();
const Product = require("../models/product.js");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.send("Error", +err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error", +err);
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    url:req.body.url,
    code: req.body.code,
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const p1 = await product.save();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});
router.post("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.url=req.body.url;
    product.code = req.body.code;
    product.name = req.body.name;
    product.price = req.body.price;
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const a1 = await product.remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
