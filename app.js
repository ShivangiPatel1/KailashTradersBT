const express = require("express");
const mongoose = require("mongoose");
const url= process.env.MONGODB_URI ||'mongodb+srv://shivangipatel1:Amazon%402021@kailashtraders1.qg99h.mongodb.net/ProductBDex?retryWrites=true&w=majority';
const app = express();
const port = process.env.PORT || 9000;
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true});
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
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})



