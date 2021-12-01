const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/ProductBDex';
const app = express();
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;
con.on("open", ()=> {
  console.log("hey you are connected");
});

const productRouter = require('./routes/product');
const adminRouter = require('./routes/login');
app.use(express.json())
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use('/product',productRouter)
app.use('/login',adminRouter)
app.listen(9000,()=>{
    console.log('server started')
})



