var http = require("http");
var fs = require("fs");
const url = require("url");
const calc = require("./calci.js");
const querystring = require("querystring");
http.createServer(function (req, res) {
   
    if (req.url == "/") {
      fs.readFile("page1.htm", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      const query = url.parse(req.url).query;
      a = querystring.parse(query)["num1"];
      b = querystring.parse(query)["num2"];
    //  console.log(a, b);
      const path = url.parse(req.url).pathname;
      console.log(path);
      if (path == "/calci/add") {
        c = calc.add(a, b);
        console.log(c);
        res.write("<h1>Sum of two numbers: " + c + "</h1>");
        res.end();
      } else if (path == "/calci/sub") {
        c = calc.sub(a, b);
        res.write("<h1>diffrence of two numbers: " + c + "</h1>");
        res.end();
      } else if (path == "/calci/mul") {
        c = calc.mul(a, b);
        res.write("<h1>Multiplying two numbers: " + c + "</h1>");
        res.end();
      } else if (path == "/calci/div") {
        c = calc.div(a, b);
        res.write("<h1>Dividing two numbers: " + c + "</h1>");
        res.end();
      }
      
    }
  })
  .listen(8001);
  console.log("Server Started...");
