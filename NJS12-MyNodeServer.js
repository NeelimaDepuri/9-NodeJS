const myhttp=require("http")
const server=myhttp.createServer((req,res)=>{
    res.end("Hello this is from server side: neel")
})
server.listen(9999,"127.0.0.1",()=>{
    console.log("port number 9999: neel")
})
/*
> npm install -g nodemon
> nodemon NJS12-MyNodeServer.js
on browser -- http://localhost:9999/
*/ 