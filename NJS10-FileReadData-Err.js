const myf=require("fs")
myf.readFile("myfile.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err)
        return 
    }
    console.log(data)
})