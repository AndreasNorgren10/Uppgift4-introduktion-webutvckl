
//Börjar med att hämta element från HTML-dokumentet och lagra dem i variabler.
const addbtn = document.querySelector("#addBtn");
const input = document.querySelector("#adToDo");
const firstList = document.querySelector("#toDoList");
const info =document.querySelector("#info");
const completed = document.querySelector("#completed");
let completedToDo = 0;
const myToDo = [];

//Här gör jag en eventlyssnare som lyssnar på kommandot klick och kör en funktion jag gjort längre ner
addbtn.addEventListener(
    "click", addToDoItem)

//Här gör jag en funktion som lägger till en uppgift i listan
function addToDoItem(){
   
info.textContent = "";    
const text = input.value;

if (text === ""){
    info.textContent = "Please enter a task";
    info.classList.add("error");
    return;
    //Om användaren inte skriver något i input får den ett felmeddelande
}
    const toDoObject ={
        todoItem:text,
        completed:false
    }
    //Här lägger jag till inputen användaren skrivit i ett objekt och gör det till li i ul listan. 
    toDoObject.todoItem = text;
    myToDo.push(toDoObject);
    const firstElement = document.createElement("li");
    firstList.appendChild(firstElement);

    const firstElementLabel = document.createElement("span");
    firstElementLabel.textContent = text;
    firstElement.appendChild(firstElementLabel);
    
    
    //Här gör jag en lyssnare som lyssnar på när man klickar på en to do och markerar den som klar då får man ett poäng.
    firstElementLabel.addEventListener(
        "click",
        function(){
          if(firstElementLabel.classList.contains("completed")){
           toDoObject.completed=false
           firstElementLabel.classList.remove("completed");
           completedToDo--;
           }
          else{
            toDoObject.completed=true
            firstElementLabel.classList.add("completed");
            completedToDo++;
             }
          completed.textContent = `${completedToDo} completed`; 
        }
    )
    //Här gör jag en lyssnare som lyssnar på när man klickar på papperskorgen och tar bort uppgiften från listan.
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

