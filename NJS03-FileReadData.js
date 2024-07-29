const myf=require("fs")
const mybf=myf.readFileSync("myData.txt")
console.log(mybf)
const myda=mybf.toString();
console.log(myda)