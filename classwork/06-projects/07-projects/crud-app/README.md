# CRUD Application (Todo List)

A simple **Create, Read, Update, Delete (CRUD)** application built with vanilla JavaScript. This project demonstrates how to manage state and manipulate the DOM to create a functional Todo List.

## What You Will Learn

-   **DOM Manipulation**: Creating, appending, and removing elements dynamically.
-   **Event Handling**: Listening for form submissions, clicks, and double-clicks.
-   **State Management**: Tracking the number of items and updating the UI.
-   **Input Validation**: Ensuring user input is valid before processing.

---

## Features

-   **Add Tasks**: Users can type a task and add it to the list.
-   **Edit Tasks**: Users can edit existing tasks.
-   **Delete Tasks**: Users can remove tasks from the list.
-   **Mark as Complete**: Double-click a task to toggle its completion status (strikethrough).
-   **Item Count**: Displays the total number of active items.
-   **Clear All**: Button to clear the entire list.

---

## Code Walkthrough

### 1. Helper Function `$`

A simple shorthand for `document.getElementById` to make code cleaner.

```javascript
const $ = (id) => document.getElementById(id);
```

### 2. Adding a Task

We listen for the `submit` event on the form.

```javascript
document.getElementById("todo-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const task = $("todo-input").value;

  // Validation
  if (task.length == 0 || task == "") {
    // Show error...
  } else {
    // Add task...
  }
});
```

### 3. Creating Elements Dynamically

We create new `<li>` elements and inject HTML for the task structure.

```javascript
const newElement = document.createElement("li");
newElement.innerHTML = `
  <span id="complete">${task}</span>
  <div>
    <button onclick="editItem(this)">Edit</button>
    <button onclick="deleteItem(this)">Delete</button>
  </div>`;
```

### 4. Editing and Deleting

-   **`deleteItem(e)`**: Removes the parent list item from the DOM.
-   **`editItem(e)`**: Makes the task text editable (`contentEditable = true`) and shows a "Save" button.

### 5. Updating Item Count

A helper function `updateCount()` calculates the number of items in the list and updates the footer text.

```javascript
const updateCount = () => {
  const numberOfItems = $("todo-list").childElementCount / 2; // Divided by 2 because of <hr> lines
  $("item-count").textContent = `${numberOfItems} items`;
};
```
