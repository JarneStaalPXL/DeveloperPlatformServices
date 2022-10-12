//Create node.js api server
const express = require('express');
const app = express();
const port = 3000;
//allow cors for all origins
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port);
console.log('Server started at port: ' + port);

