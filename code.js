


const addbtn = document.querySelector("#addBtn");
const input = document.querySelector("#adToDo").value;
const firstList = document.querySelector("#toDoList");
const text = input.value;

function addToDoItem(){


if (text ===""){
    return firstList.innerHTML = "Please enter a task!";
}

else {
    const firstElement = document.createElement("li");
    firstElement.innerHTML = inputValue;
    firstList.appendChild(firstElement);

    const firstElementLabel = document.createElement("span");
    firstElementLabel.textContent = "text";
    firstElement.appendChild(firstElementLabel);
}
} 
addbtn.addEventListener(
    "click", addToDoItem)
    