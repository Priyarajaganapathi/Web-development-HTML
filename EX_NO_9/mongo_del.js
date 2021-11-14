var http = require("http");
var fs = require("fs");
const url = require("url");
var MongoClient = require("mongodb").MongoClient;
var url1 = "mongodb://127.0.0.1:27017/";
const querystring = require("querystring");

function student(req, res) {
    var result;
    if (req.url == "/") {
      fs.readFile("del.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    const path = url.parse(req.url).pathname;
    if (path == "/del") {
        res.writeHead(200, { "content-type": "text/html" });
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("StudentCollection");
    r = querystring.parse(query)["roll"];
    var myquery = {roll_key: r, };
    var mynum = {roll:r };
    dbo.collection("StudentCollection").deleteOne(mynum, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });
  
    
     setTimeout(function () {
        name1 = result[0].name_key;
        roll = result[1].roll_key;
        cgpa1=result[2].grade;

        res.write("<h1>Name:" + name1 + "<br>Roll Number:" + roll +"<br>Cgpa:"+cgpa1+"</h1>");
        res.end();
      }, 3000);
    }
  }
  var server=http.createServer(student);

  server.listen(8010);
  console.log("Working...");