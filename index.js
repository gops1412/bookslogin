const express = require('express'),
    app = express() 
     bodyparser= require ('body-parser');
     app.use(express.static('pic'));

app.use(bodyparser.urlencoded({express:false}))
 app.post('/details',(req,res)=>{
  res.send(req.body.name +" - " + req.body.pass)
 })
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
     })
app.get("/login",(req,res)=>{
  res.sendFile(__dirname+"/login.html");
})
app.listen(3000,()=>{
    console.log("App started");
})