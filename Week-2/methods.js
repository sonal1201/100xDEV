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

function createUser(req,res){
    res.send("Hello World");
}

app.get('/handleSum', handleFirstRequest)
app.post('/createUser', createUser)

function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started);
