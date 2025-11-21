const $ = (id) => document.getElementById(id);
document.getElementById("todo-form").addEventListener("submit", (e) => {
  // get the task
  e.preventDefault();
  const task = $("todo-input").value;

  // form level validataion on task
  if (task.length == 0 || task == "") {
    const error = "task cannot be empty";
    const message = document.getElementById("message");
    message.textContent = error;
    message.style.color = "red";
    const inputFeild = document.getElementById("todo-input");
    inputFeild.style.border = "1px solid red";
  } else {
    const message = document.getElementById("message");
    message.textContent = "";
    const inputFeild = document.getElementById("todo-input");
    inputFeild.style.border = "1px solid black";
  }
  // show place to show data

  const place = $("todo-list");
  const newElement = document.createElement("li");
  const hrline = document.createElement("hr");
  newElement.innerHTML = `
    <span id = "complete">${task}</span>
    <div>
      <button id = "mark-complete" onclick="editItem(this)">Edit</button>
      <button id = "save" onclick = "saveChanges(this)" style="display: none">Save</button>
      <button id = "delete-button" onclick="deleteItem(this)">Delete</button>
    </div>`;
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  // alone with button

  place.appendChild(newElement);
  place.appendChild(hrline);

  const complete = newElement.querySelector("#complete");
  complete.style.cursor = "pointer";
  complete.style.userSelect = "none";
  complete.addEventListener("dblclick", () => {
    complete.style.textDecoration =
      complete.style.textDecoration == "line-through" ? "none" : "line-through";
  });
  // clear
  $("todo-input").value = "";
  //  after every input adding border btw them
  updateCount();
});

const deleteItem = (e) => {
  const listElement = e.parentElement.parentElement;
  listElement.nextElementSibling.remove();
  listElement.remove();
  updateCount();
};

const editItem = (e) => {
  data = e.parentElement.previousElementSibling;
  // const s = prompt("Edit", data.textContent);
  // data.textContent = s;
  data.contentEditable = true;
  $("mark-complete").style.display = "none";
  $("save").style.display = "block";
};

$("clear-completed").addEventListener("click", () => {
  $("todo-list").innerHTML = "";
  updateCount();
});

const updateCount = () => {
  const numberOfItems = $("todo-list").childElementCount / 2;
  $("item-count").textContent = `${numberOfItems} ${
    numberOfItems <= 1 ? "item" : "items"
  }`;
};
