var fs = require("fs");
var host = "127.0.0.1";
var port = 8080;
var express = require("express");
const data = require('./resources/data/site-content.json')

var app = express();
app.use(express.static(__dirname)); //use static files in ROOT/public folder

app.get("/data", function(request, response){ //root dir
    response.header("Content-Type",'application/json');
    response.send(JSON.stringify(data));
});

app.listen(port, host);