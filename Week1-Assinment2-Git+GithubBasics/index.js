


const http = require("http");



const fs = require("fs").promises;

//create a http function to respond to http requests
const requestListener = function(req, res) {

    console.log(req.url);

    if (req.url === "/") {


        fs.readFile( __dirname + "/page.html")
        .then(
            contents => {

                res.setHeader("content-Type", "text/html; charset-UTF-8");

                res.writeHead(200);

                res.end(contents);
            }

        );
    } else {

        fs.readFile( __dirname + "/data.json")
        .then(contents =>{

            res.Header("content-Type", "application/json, charset=UTF-8");

            res.Head(200);
            res.
            res.end(contents);
        });
    }
};
//create a http server instance
const server = http.createServer(requestListener);

//define the TCP port and IP address to tell our http server to listen to
const host = "127.0.0.1"; // this ip adress reprsents localhost - this computer
const port = "3000"; // typical port node.js runs on

//call the listen() method to start listening to http requests
server.listen(
    port,
    host,
    () => {
        console.log('Server is running');
    }
);
