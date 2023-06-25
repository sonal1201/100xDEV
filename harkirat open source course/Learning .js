// VARIABLE.............
// let name= "sonal";
// console.log(name);


// CONSTANT.............
// const interestRate = 0.3;
// interestRate =1;     //constant cannot be changed. 
// console.log(interestRate)

// let name = "sonal"; //STRING.....
// let age = 30;       //NUMBER.....
// let isAproved = True;  //BOOL....
// let firstName = undefined;
// let lastName = null;

// // OBJECT.........
// let person = {
//     name : "sonal",
//     age: 30
// };
// // DOT NOTATION......
// person.name = 'rahul';
// console.log(person);

// ARRAY...... It is Object.
// let colors = ['red','blue','white'];
// colors[3]= 1;
// console.log(colors.length);

// ADDING THE SUM USING FUCTION..
// function sumof(start,end){
//     var sum =0
//     for(var i= start;i<=end;i++){
//         sum +=i
//     }
//     return sum;
// }

// var sum = sumof(1,2)
// console.log(sum)

// function printPartialrow(n){
//     var str = "";
//     str = str + "*";
//     for(var i =0;i<n-2;i++){ 
//         str = str +" "
//     }
//     str = str + "*";
//     console.log(str);
// }

// function scarrypattern(n){
//     var str = "";
//     for(var i= 0;i<n;i++){
//         str=str + "*";
//     }
// console.log(str);

// }
// function PrintwholeThing(n){
//     scarrypattern(n);
//     for(var i = 0;i<n-2;i++){
//         printPartialrow(n);
//     }
//     scarrypattern(n);
// }
// PrintwholeThing(11);

function count(first,last){
    var sum = 0;
    for(var i =0;i<=last;i++){
        sum=sum+i;
    }
    return sum;
}
function printScreentime(){
    console.log("10 second have passed");
}
setTimeout(printScreentime,10*1000);
var ans = count(1,10000);
console.log(ans);
