function printToscreen(){
    console.log("Hello world!")
}

setTimeout(printToscreen,2*1000);

let count = 0;
for(var i = 0;i<1000;i++){
    count =count+1;
}
console.log(count);