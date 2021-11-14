var http = require("http");
var fs = require("fs");
const url = require("url");
var MongoClient = require("mongodb").MongoClient;
var url1 = "mongodb://127.0.0.1:27017/";
const querystring = require("querystring");

function student(req, res) {
    var result;
    if (req.url == "/") {
      fs.readFile("website.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    const path = url.parse(req.url).pathname;
    if (path == "/insert") {
      res.writeHead(200, { "content-type": "text/html" });

      MongoClient.connect(url1, function (err, db) {
        if (err) throw err;
        var dbcon = db.db("StudentCollection");
        const query = url.parse(req.url).query;
        name1 = querystring.parse(query)["name"];
        r = querystring.parse(query)["roll"];
        cgp = querystring.parse(query)["gpa"];
        var myobj = {name_key: name1, roll_key: r, grade:cgp, };
        dbcon.collection("StudentCollection").insertOne(myobj, function (err, res) {
          if (err) throw err;
          console.log("Values inserted");
        });
        dbcon.collection("StudentCollection").find().toArray(function (err, res) {
            if (err) throw err;
            result = res;
            db.close();
          });
      });
      setTimeout(function () {
        name1 = result[0].name_key;
        roll = result[1].roll_key;
        cgpa1=result[2].grade;

        res.write("<h1>Name:" + name1 + "<br>Roll Number:" + roll +"Cgpa:"+cgpa1+"</h1>");
        res.end();
      }, 3000);
    }
  }
  var server=http.createServer(student);

  server.listen(8040);
  console.log("Working...");