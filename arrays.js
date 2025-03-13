//arrays in js
//arrays are stored multiple values in single variable
//arrays are special type of objects
//examples of arrays

const fruits=["apple","mango","grapes","pineapple","orange"]
console.log(fruits)

//acessing the array elemnts
console.log(fruits[0])
console.log(fruits[1])
//changing array elemnt
fruits[0]="Kiwi"
console.log(fruits)
//adding new elements to array
fruits[5]="strawberry"
console.log(fruits.length);
console.log(fruits.sort())
console.log(fruits.reverse())
//============================================================
//loopin through arrays
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//Array Methods
//push - adds new elements to the end of the  array
fruits.push("watermelon")
console.log(fruits)
//pop-removes the last element from the array 
fruits.pop()
console.log(fruits)
//shifts-removes the first element from the array
fruits.shift()
console.log(fruits)
//unshifts-add new elemts from the begining of the array
fruits.unshift("apple")
//map-creates  a new array with the results of calling a function for every element.
const numbers=[1,3,5,7,9]
const result=numbers.map(function(value)
{
    return value * 2;
})
console.log(result)
//filter -creates a new array that pass the test implemented by the provided function
const result2=numbers.filter(function(value){
return value >2;
})
console.log(result2)
//reduce()-reduce the array into single value
const result3=numbers.reduce(function(accumulator,value)
{
    return accumulator+value;
})
console.log(result3)

//Assingment javascript of 2day

let colors=["red","blue","green","orange","Purple"]

//Add two colors at the begining
colors.unshift("Black","white");
//Remove one color from the end
colors.pop();
//Print the final array
console.log(colors);