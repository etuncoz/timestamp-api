var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send('whad up');
});

app.listen(8080,function(){
    console.log("server is listening to *8080");
});