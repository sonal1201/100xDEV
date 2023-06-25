// const { findSeries } = require("async");

// function promiseBody(resolve){
//     setTimeout(resolve,5000);
// }

// function medcineGet(){
//     var ans = new Promise(promiseBody)
//     return ans;
// }
// function printThing(){
//     console.log("Medcine 1 recived");
// }
// var medcinePromise = medcineGet(); 
// console.log(medcinePromise);
// medcinePromise.then(printThing);


// BEST WAY TO UNDERSTAND PROMISES

// function fileIsRead(content){
//     console.log(content);
// }
// // fs.read("a.txt",fileIsRead);
// fs.read("a.txt").then(fileIsRead);

// FILE CALLBACK

const fs = require('fs');
function callBack(err, data){
    console.log(data);
}

fs.readFile('a.txt','utf8',callBack);