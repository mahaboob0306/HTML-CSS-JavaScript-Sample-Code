//asynchronous programming
//call back function
//call back help,promises
//Example of call backfunction 
//it is a function which is passed as an arugument to the another ,and it executed after first complete it task.
//call back function are used in asynchronous operations in js.Async operations means these are tasks that dont block excution of other code
//aynchronous programmin gwhen async,awit dones
function greet(name,callback){
    console.log("Hello"+name+"!");
    callback();//executes the callback
}

function sayGoodBye(){
    console.log("Say GoodBye!!!!!!!!!!!!")
}

greet("Aliceee",sayGoodBye);

//=================================================================
//call backhell:it ocurs when many nested callback it is hard to read and understand and maintain 
//when delaing with multiple asynchronous operations that depends oneach other nested callbacks within callbacks this suituation is called as call back hell
//Recursion: where function call itself within its own definition other used solve problem and broken down into smaller an self similiar subproblems.
//it is establish connection between servers ,database server api server
//cto solve the callback promised were introduced

const promiseone = new Promise(function(resolve,reject){
//do all your async tasks
//db connection,db calls,db inject
//n/w calls


setTimeout(function(){
    console.log("Async Task is completed")
    resolve()//if it is not given the above console is printed
},2000)
})
//consume a promise 
promiseone.then(function(){//resolve/reject
 console.log("Promise consumed")   
})

//secondExample
 new Promise(function(resolve,reject){
setTimeout(function(){
        console.log("Async Task2 is completed")
        resolve()//if it is not given the above console is printed
    },5000)
    }).then(function(){//resolve/reject
        console.log("Async2 is resolved")   
})
     

//API CALLING third example

const promisethree= new Promise(function(resolve,reject){
    //do all your async tasks
    //db connection,db calls,db inject
    //n/w calls
    
    
    setTimeout(function(){
        console.log("API CSLLING")
        resolve({username:"samer",email:"someone@example.com",})//if it is not given the above console is printed
    },3000)
    })
    promisethree.then(function(user){
        console.log(user)
    })

//Fourth Example
    const promiseFour= new Promise(function(resolve,reject){
        //do all your async tasks
        //db connection,db calls,db inject
        //n/w calls
        
        let error = true;
        if(!error){
            resolve({username:"samer",email:"someone@example.com",})//if it is not given the above console is printed
        }
        else{
            reject("Error is coming")
        }
        setTimeout(function(){
            console.log("API CALLING")
           
        },3000)
        })
        promiseFour.then(function(user){
            console.log("Promise Resolved user:",user)
        //You can do something with userdata here
        })
        .catch(()=>{
            //Handle the error here
        console.log("Promise Rejected:",error);
        });
        console.log("Promise Initiated:::::::")//This will run immediately

