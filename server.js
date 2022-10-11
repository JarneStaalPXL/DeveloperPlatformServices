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

//create a post request with body
app.post('/convertDocToPdf', function(req, res) {
    //get the body of the request
    let body;
    req.on('data', function (data) {
        body += JSON.parse(data);
    });
    req.on('end', function () {
        //parse the body
        var post = JSON.parse(body);
        //get the base64 string
        var base64 = post.base64;
        //convert the base64 string to a buffer
        var buffer = new Buffer(base64, 'base64');
        //write the buffer to a file
        fs.writeFile('test.png', buffer, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
    });
});


// app.post('/convertDocToPdf', (req, res) =>
// {
//     //get data from post
//     let data = req.body;
//     console.log(data);

//     //get file from body
//     // const file = req.body.file;
//     console.log('File received: ' + req);
//     console.log("response" + res);
//     //convert file to pdf
//     // const pdf = convertToPdf(file);
//     //send pdf to client
//     res.send("test");
// });

function convertToPdf(){
    //convert file to pdf
    return pdf;
}