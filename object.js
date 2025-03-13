//objects are also variables but they  contain many values.
//example of object
const car={
    make:"Benz",
    model:"Cremy",
    year:2020,
    color:"white",
    price:340000,
    greet:function(){
        return "HelloWorld" +" "+this.make+""+this.model;
    }
}
console.log("car objects::::::::",car)
console.log("car make::::::::",car.make)
console.log("car make::::::::",car['make'])

//add some properties to the object

car.engine="V6"
console.log("car engine",car.engine)
console.log("car objects::::::::",car)
console.log(car.greet())