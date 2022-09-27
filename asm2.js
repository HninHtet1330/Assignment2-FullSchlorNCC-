const express = require('express');
const app = express();
const path = require('path');
app.get("/home",(req,res)=>{
      res.sendFile(path.join(__dirname, 'index.html'));
})
app.get("/aboutUs",(req,res)=>{
      res.sendFile(path.join(__dirname, 'aboutUs.html'));
})
app.get("/contactUs",(req,res)=>{
      res.sendFile(path.join(__dirname, 'contactUs.html'));
})
app.get("/learn",(req,res)=>{
      res.sendFile(path.join(__dirname, 'learn.html'));
})
app.listen(3000,()=>{
      console.log("Server is running at localhost:3000");
})