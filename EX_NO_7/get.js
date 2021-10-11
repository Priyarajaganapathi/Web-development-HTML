http=require('http');
url=require('url');
querystring = require('querystring');
function onRequest(request,response)
{   
    var path =url.parse(request.url).pathname;
    console.log('request for '+path+' recieved');
    var query = url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)['name'];
    var roll=querystring.parse(query)['roll'];
    var dept=querystring.parse(query)['dept'];
    var gender=querystring.parse(query)['gender'];
    var email=querystring.parse(query)['email'];
    var mob=querystring.parse(query)['mob'];
    var yr=querystring.parse(query)['yr'];
    response.write('Hello '+name+' Your Form details submitted succesfully..\n\nRoll number is'+roll+'\n\nDepartment is '+dept+'\n\nGender '+gender+'\n\nEmail id is '+email+'\n\n');
    response.write('Mobile number is '+mob+'\n\nYear Of Study is '+yr);
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server started...');