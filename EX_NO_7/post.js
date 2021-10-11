var http=require('http');
var querystring=require('querystring');
var qs,name,roll,dept,gender,email,mob,yr;
http.createServer(function(req,res){
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data in string format :"+data1);
    });
    req.on('end',function(){
        qs=querystring.parse(data1);
        console.log(qs);
        name=qs['name'];
        roll=qs['roll'];
        dept=qs['dept'];
        gender=qs['gender'];
        email=qs['email'];
        mob=qs['mob'];
        yr=qs['yr'];
        res.write("DETAILS STORED AFTER REGISTRATION: \n\n");
        res.write("WELCOME "+name+"....\n\nyour roll number is:   "+roll+" \n\nYou Belong to the department of:   "+dept + "\n\nYOUR GENDER:   "+gender+"\n\nYOUR EMAIL ID IS:   "+email);
        res.write("\n\nYOUR MOBILE NUMBER IS:   "+mob+"\n\nYOUR YEAR OF  STUDY IS:   "+yr);
        res.end();
    })
}).listen(8000);
console.log("started....");