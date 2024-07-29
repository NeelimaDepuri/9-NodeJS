const myf=require("fs")
const biodat={
    name:"neel",
    age:20
}
console.log(biodat)
const jsonData=JSON.stringify(biodat)
myf.writeFile("testjson.json",jsonData,(err)=>{
    console.log("process completed")
})
myf.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data)
})