var express = require('express');
var app = express();
app.get("/",(req,res,next)=>{
    res.send("hello");
});
app.listen(3030,function(){
    console.log("server is running");
});
