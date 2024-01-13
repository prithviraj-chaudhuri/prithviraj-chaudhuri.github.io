var fs = require("fs");
var host = "127.0.0.1";
var port = 8080;
var express = require("express");

var app = express();
app.use(express.static(__dirname)); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

app.listen(port, host);