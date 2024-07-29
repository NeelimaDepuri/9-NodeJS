//httpRequest.js
const http=require("http")
//https://jsonplaceholder.typicode.com/todos/4-->here only id:4 record will be printed if we write 4
http.get("http://jsonplaceholder.typicode.com/todos/",(resp)=>{
    let data=""
    //a chunk of data has been received
    resp.on("data",(chunk)=>{
        data+=chunk
    })
    //the whole response has been received print out the result
    resp.on("end",()=>{
        console.log(JSON.parse(data))
        console.log(data)
    })
}).on("error",(err)=>{
    console.log("error:",err.message)
})