//require the http module
var http=require("http")
//require your custom module
var dt=require('./myModule')
//create an http server
http.createServer(function(req,res){
    //set the response header
    res.writeHead(200,{"content-Type":'text/html'})
    //use the custom module to get the date and time
    res.write("the date and time is:"+dt.myDateTime())
    //end the response
    res.end()
}).listen(8000)//server listens on port 8000
