// JS functions is a block of code design to perform task
// It is executed when something invokes it(calls it)
// Functions are used to perform operations.
// Functions can be called multiple times.
// Functions can take parameters.
// function can return values.
// can be stored in objects,variables,arrays. 
// Functions can be passed as aruguments to other Functions
// functions can be returned from other functions
// funtions can be anonymous
// functions can be self-invoking
// functions can be nested
// functions can be recursive
// functions can be asynchronous.


//different types of functions 
//named function
function add(a,b){
    return a+b;
}
let result=add(6,5)
console.log(result);

//Anonymous function
let multiply=function(a,b){/// will not have any to function
    return a*b;
}
console.log(multiply(4,8))
//Arrow function
let divide=(a,b)=>{
    return a/b;
}
console.log(divide(3,9))
//functions can be passed as arguments to other functions
function sample(a,b,add){
    return add(a,b);
}
let result1=sample(2,3,add);
console.log(result)

//how the functions are invoked
//when event occurs(when user clicks a button)
//when its is invoked called from javascript code
//automatically (self-invoked) 
//local variables

function myfunction(){
    let carName="Volvo"
console.log("car name is in inside the function",carName)
}
myfunction()
let carName="BMW"//outside the function

console.log(carName)