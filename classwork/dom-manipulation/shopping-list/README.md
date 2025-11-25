# Shopping List Application

A simple shopping list app that allows users to add and remove items. This project demonstrates array manipulation and dynamic DOM rendering.

## 📚 What You Will Learn

-   **Array Manipulation**: Using `push()` to add items and `splice()` to remove them.
-   **Event Delegation**: Attaching a single event listener to a parent element (`itemList`) to handle clicks on dynamically created children (delete buttons).
-   **Dynamic Rendering**: Clearing and rebuilding the list in the DOM whenever the data changes.
-   **Keyboard Events**: Listening for the "Enter" key to submit input.

---

## 🚀 Features

-   **Add Items**: Type an item and click "Add" or press Enter.
-   **Remove Items**: Click the "Delete" button next to an item to remove it.
-   **Empty Input Prevention**: Prevents adding empty items to the list.

---

## 📝 Code Walkthrough

### 1. State Management

We use a simple array `items` to store the list of shopping items.

```javascript
let items = [];
```

### 2. Adding Items

When the user adds an item:
1.  We check if the input is not empty.
2.  We `push` the new item to the `items` array.
3.  We call `renderItems()` to update the UI.

### 3. Rendering the List

The `renderItems` function is responsible for syncing the DOM with the `items` array.

```javascript
function renderItems() {
  itemList.innerHTML = ""; // Clear current list
  items.forEach((i, index) => {
    // Add HTML for each item...
  });
}
```

### 4. Removing Items (Event Delegation)

Instead of adding an event listener to *every* delete button, we add one to the parent container (`itemList`). When a click occurs, we check if the target was a delete button.

```javascript
itemList.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("delete-btn")) {
    // Remove item...
  }
});
```

This is more efficient and works for items added dynamically after the page loads.
