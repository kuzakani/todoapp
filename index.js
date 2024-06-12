const inputBox = document.getElementById("inputBox");
const listContainer = document.querySelector(".tasks-container");

function TaskManaging() {
  if (inputBox.value === "") {
    alert("Add a task you wish to complete");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  dataSave();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        TaskManaging(); 
    } else {
        console.log("something went wrong")
    }
   
})

listContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    dataSave();
  }
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    dataSave();
  } 
  dataSave();
});

function dataSave() {
    localStorage.setItem("infos", listContainer.innerHTML);

}

function keepTask() {
      listContainer.innerHTML = localStorage.getItem("infos");
}

keepTask();