#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileContent = fs.readFileSync("index.html");
    var buffer = new Buffer(fileContent,"utf-8");
    
    response.send(buffer.toString("utf-8",0,27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
