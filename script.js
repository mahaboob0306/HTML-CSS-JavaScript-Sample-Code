let taskInput=document.getElementById("taskInput");
let addTaskButton=document.getElementById("addTask");
let tasList=document.getElementById("taskList");

//Function to add a new task
function addTask(){
    let taskText= taskInput.value.trim();
    if(taskText === ""){
        alert("Please add a task !")
        return;
    }

//Create a new list
let li=document.createElement("li");
li.textContent= taskText;
//create complete button
let completeButton=document.createElement("button");
completeButton.textContent="";
completeButton.style.marginLeft="10px";
completeButton.addEventListener("click",function(){
    li.classList.toggle("Complete");
})
//create delete button
let deletebutton =document.createElement("button");
deletebutton.textContent="";
deletebutton.style.marginRight="10px"
deletebutton.addEventListener("click",function(){
    tasList.removeChild(li);
})
//Append buttons to list items
li.appendChild(completeButton)
li.appendChild(deletebutton)
//Append list item to task list
taskList.appendChild(li);
//clear input field
taskInput.value=""
}
//Event listener for add button
addTaskButton.addEventListener("click",addTask)
//allow adding task by pressing enter
taskInput.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
    addTask();
    }
});