const $ = (id) => document.getElementById(id);
const form = document.getElementById("todo-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = $("todo-input").value;

  if (task.length == 0 || task == "") {
    const error = "Task cannot be empty.";
    const message = $("message");
    message.textContent = error;
    message.style.color = "red";
    $("todo-input").style.border = "0.6px solid red";
  } else {
    $("message").innerHTML = "";
    $("todo-input").style.border = "0.6px solid black";

    // create and append the element
    const place = $("todo-list");
    // const newElement = document.createElement("li");
    // newElement.textContent = task;
    // newElement.style.padding = "4px 8px";
    // const line = document.createElement("hr");
    // place.appendChild(newElement);
    // place.appendChild(line);

    place.innerHTML += `
    <div class="list-item">
      <li id="complete">${task}</li>
      <div> 
        <button id="mark-complete">Edit</button>
        <button id="delete-button">Delete</button>
      </div>
    </div>
    `;

    // Clear the input field
    $("todo-input").value = "";
  }
});
