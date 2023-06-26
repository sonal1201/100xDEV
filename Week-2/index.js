// const fs = require("fs");
// function callbackFn(err, data){
//     console.log(data);
// }
// fs.readFile("b.txt","utf-8",callbackFn);

// Boiler plate for express HTTP server. 
const express = require('express')
const app = express()
const port = 3000

function sum(counter){
    var sum =0;
    for(var i=0;i<counter;i++){
        sum =sum +i;
        }
        return sum;
}

function handleFirstRequest(req, res){
    var counter = req.query.counter;
    var calcSum = sum(counter);
    
    var answer = "The sum is " + calcSum;  
    res.send(answer);
    
}

app.get('/handleSum', handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started);


// function sum(counter){
//     var sum =0;
//     for(var i=0;i<counter;i++){
//         sum =sum +i;
//         }
//         return sum;
// }
