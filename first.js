console.log("WELCOME TO JAVASCRIPT");
//variables

var a=10;//global scope
let c=30;//local scope
const b=44;//const value
var a=22;
// let c=33;
const pie=3.14;
let num1=25;
let result=num1 *2;
console.log("sum of vslues",a+b);
console.log("type of a:", typeof (a));
console.log("result",result);
//datatypes
//1.Number
let num=25;
console.log("num:::::::::::",typeof(num));
//2.String
let name ="NoorShab"
console.log("name:::::::::::",typeof(name));
//3.Boolean
let istrue=true;
console.log("istrue:::::::::::",typeof(istrue));
//Null
let n=null;
console.log("n",n);
//Undefined
let u;
console.log("u",u);
//symbol
let s=Symbol();
console.log("s::",s);
//object
let obj={name:"raj",age:8}
//arrays

let cars=["BMW","Audi","Benz"]
console.log("cars::::::::",cars)
console.log("cars",typeof(cars))

//Arithmetic Operators
//+,-,*,/,%,++,--
//Assingment Operators
//=,+=,-=,*=,/=,%=
//Comparision Operator
//=,== != !== >= < > <=
//logical operators
//&&, || !

//examples
let x=10;
x+=5;
console.log("x::::::::",x)
x-=5;
console.log("x::::::::",x)
x*=5;
console.log("x::::::::",x)
x/=5;
console.log("x::::::::",x)
x%=5;
console.log("x::::::::",x)
x++;
console.log("x::::::::",x)
x--;
console.log("x::::::::",x)

//Conditional Statments
//if else
//if(condition){
//code}
//else{
//code}

if(7>4){
    console.log("true");
}
else if(2>4){
    console.log("true")
}
else{
 console.log("false")   
}

//switch case
let day="Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
            console.log("Today is tuesday");
            break;
    case "Wednesday":
      console.log("Today is Wednesday");
      break;
    case "Thrusday":
        console.log("Today is thrusday");
        break;
    case "friday":
        console.log("Today is friday");
        break;
    case "saturday":
        console.log("Today is saturday");
        break;
    case "sunday":
            console.log("Today is sunday");
            break;
    default:
        console.log("Invalid day:::::::::::")
        break;
}

//For loops
//for(initialization,Condition,Increament/Decrement){
//code
//}

for(let i=0;i<5;i++){
    console.log("Print i value:::::",i)
}

//while loop
//while(condition){
//code
//}
let i= 0
while(i<5){
    console.log("print i value:",i);
    i++
}
//do-while loop
//do
//{
//code
//}while(condition);
let j=2
do{
    console.log("print j value:",j);
    j++
}while(j<10)










