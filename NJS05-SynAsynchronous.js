const myf=require("fs")
const data=myf.readFileSync("myNewData.txt","utf-8")
console.log(data)
myf.readFile("info.txt","utf-8",(err,data)=>{
    console.log(data)
})