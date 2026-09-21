


const addbtn = document.querySelector("#addBtn");
const input = document.querySelector("#adToDo");
const firstList = document.querySelector("#toDoList");
const info =document.querySelector("#info");
const completed = document.querySelector("#completed");
let compleatedToDo = 0;
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
    myToDo.push(text);
    const firstElement = document.createElement("li");
    firstList.appendChild(firstElement);

    const firstElementLabel = document.createElement("span");
    firstElementLabel.textContent = text;
    firstElement.appendChild(firstElementLabel);
    
    firstElementLabel.addEventListener(
        "click",
        function(){
          if(firstElementLabel.getAttribute("class") == "completed"){
           // remove class
           firstElement.setAttribute("class", "");
           compleatedToDo --;
           
          }
          else{
            firstElementLabel.setAttribute("class", "completed");
            compleatedToDo ++;
            //add clas
          }
          compleated.textContent = `${compleatedToDo} compleated`; 
        }
    )
    
    input.value = "";
} 

    