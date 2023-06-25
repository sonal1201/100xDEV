var count =0;
function stopWatch(){
    console.clear()
    count = count+1;
    console.log(count);
}
setInterval(stopWatch,1000)