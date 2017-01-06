var express = require("express");
var app = express();
var moment = require("moment");
var http = require("http");

app.get('/',function(req,res){
   res.sendfile(__dirname + '/index.html');
});

app.get('/:time',function(req,res){
    var displayObj = {
        "unix": 0,
        "natural": ""
    }
    var date;
    
    if(/\d{8,13}/.test(req.params.time)){ //if unix..
        date = moment(req.params.time,'X');
    }else{
        date = moment(req.params.time,'MMMM DD, YYYY');
    }
    
    if(date.isValid()){
        displayObj.unix = date.format('X');
        displayObj.natural = date.format('MMMM DD, YYYY');
        res.send(displayObj);
    }else{
        displayObj.unix = null;
        displayObj.natural = null;
        res.send(displayObj);
    }
    
});

http.createServer(app).listen(process.env.PORT | 8080,function(){
    console.log("server is listening to *8080");
});