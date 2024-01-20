var fs = require("fs");
var host = "127.0.0.1";
var port = 8080;
var express = require("express");
const data = require('./resources/data/site-content.json')

var app = express();
app.use(express.static(__dirname+"/site2")); //use static files in ROOT/public folder

app.get("/data", function(request, response){ //root dir
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});

app.listen(port, host);