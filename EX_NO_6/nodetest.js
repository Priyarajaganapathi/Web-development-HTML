var http=require('http');
var fs = require('fs');
http.createServer(function(req,res)
{
fs.readFile('page1.htm', function(err, data) 
{ 
  fs.readFile('page2.htm', function(err, data1)
  { 
   fs.readFile('page3.htm', function(err, data2)
   { 
   fs.readFile('page4.htm', function(err, data3)
   {  
   fs.readFile('page5.htm', function(err, data4)
   { 
	if(req.url=="/login")
	{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
	return res.end();
	}
	else if(req.url=="/add")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data1);
	return res.end();
	}
	else if(req.url=="/sub")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data2);
	return res.end();
	} 
	else if(req.url=="/mul")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data3);
	return res.end();
	}
	else if(req.url=="/div")
	{
	res.writeHead(200,{'Content-type':'text/html'});
    res.end(data4);
	return res.end();
	} 
	else 
	{ 
		res.end("THE URL IS WRONG");
	} 
   });
   });
  });
  });
});
}).listen(8080);