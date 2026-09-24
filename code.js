const addbtn = document.querySelector("#addBtn");
const input = document.querySelector("#adToDo");
const firstList = document.querySelector("#toDoList");
const info =document.querySelector("#info");
const completed = document.querySelector("#completed");
let completedToDo = 0;
const myToDo = [];

addbtn.addEventListener(
    "click", addToDoItem)

function addToDoItem(){
   
info.textContent = "";    
const text = input.value;

if (text === ""){
    info.textContent = "Please enter a task";
    return;
}
    const toDoObject ={
        todoItem:text,
        completed:false
    }
    toDoObject.todoItem = text;
    myToDo.push(toDoObject);
    const firstElement = document.createElement("li");
    firstList.appendChild(firstElement);

    const firstElementLabel = document.createElement("span");
    firstElementLabel.textContent = text;
    firstElement.appendChild(firstElementLabel);
    
    firstElementLabel.addEventListener(
        "click",
        function(){
          if(firstElementLabel.getAttribute("class") == "completed"){
           toDoObject.completed=false
           firstElementLabel.setAttribute("class", "");
           completedToDo--;
           }
          else{
            toDoObject.completed=true
            firstElementLabel.setAttribute("class", "completed");
            completedToDo++;
             }
          completed.textContent = `${completedToDo} completed`; 
        }
    )
    const trashCan = document.createElement("span");
    trashCan.innerHTML = "🗑️";
    firstElement.appendChild(trashCan);
    trashCan.addEventListener(
        "click",
         function(){
        const index=myToDo.map(t => t.todoItem).indexOf(toDoObject.todoItem);
        myToDo.splice(index,1)
  
        firstElement.remove();
});

 //myToDo.map(t => t.todoItem).indexOf()
 //myToDo.slice(?,?);


    input.value = "";
} 

