const express = require('express');
const http =require('http');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

var app = express();
app.use(express.static(publicPath));
app.listen(3000,()=>{
  console.log(`The sever is running on 3000`)
})
