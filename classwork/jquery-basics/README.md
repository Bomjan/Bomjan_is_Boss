# jQuery Basics: Number Sorter Application

Welcome to the **jQuery Basics** learning module! This project demonstrates how to use jQuery to build an interactive "Number Sorter" application.

## What You Will Learn

In this module, we explore core jQuery concepts including:
-   **Selectors**: How to find and target HTML elements.
-   **Events**: How to listen for user interactions like clicks.
-   **DOM Manipulation**: How to add, remove, and modify elements on the page.
-   **Animations**: How to create custom animations using JavaScript logic.
-   **Input Validation**: How to ensure user input is correct before processing.

---

## Project Overview

The application allows a user to enter a number. When the "Find" button is clicked, the app:
1.  Validates the input.
2.  Separates all numbers from 0 up to the input number into **Evens** and **Odds**.
3.  Displays these numbers in two separate columns with a staggered animation effect.

---

## Code Walkthrough

### 1. Setup and Initialization

We wrap our code in `$(document).ready()`. This ensures that our JavaScript doesn't run until the HTML is fully loaded, preventing errors where code tries to access elements that don't exist yet.

```javascript
$(document).ready(() => {
  // Application logic goes here
});
```

### 2. The `animateAppend` Function

This helper function handles the visual logic of adding numbers to the screen one by one.

```javascript
function animateAppend(container, items) {
  let delay = 0;
  const delayIncrement = 20; // Time in ms between each number appearing

  items.forEach((item) => {
    // Create a new paragraph element with the number
    const p = $(`<p>${item}</p>`);
    
    // Schedule the appending of this element
    setTimeout(() => {
      container.append(p);
    }, delay);
    
    // Increase the delay for the next item
    delay += delayIncrement;
  });
}
```

*   **Why use `setTimeout`?** By increasing the `delay` for each item, we create a "waterfall" effect where numbers appear sequentially rather than all at once.
*   **`$( ... )`**: We use jQuery to create a new DOM element simply by passing an HTML string.

### 3. Handling User Interaction

We listen for the `click` event on the button with ID `#button`.

```javascript
$("#button").click(() => {
  // ...
});
```

#### Step 3a: Selection and Validation

We grab the necessary elements and the user's input.

```javascript
const button = $("#button");
const messageEl = $(".message");
const inputVal = $("#input").val();
const v = parseInt(inputVal, 10); // Convert string input to an integer
```

We then validate the input. If it's invalid (not a number, negative, or empty), we show an error message and stop.

```javascript
if (isNaN(v) || v < 0 || inputVal.trim() === "") {
  messageEl.text("Please enter a valid non-negative number.");
  return;
}
```

#### Step 3b: Managing State

Before processing, we clear any previous results and disable the button to prevent double-clicks.

```javascript
$(".odds p").remove(); // Remove old odd numbers
$(".evens p").remove(); // Remove old even numbers
messageEl.text("");    // Clear error messages

button.prop("disabled", true).text("Finding..."); // Disable button
```

*   **`.remove()`**: Removes the selected elements from the DOM.
*   **`.prop()`**: Changes a property of an element (like `disabled`).
*   **`.text()`**: Updates the text content of an element.

#### Step 3c: Processing and Displaying

We use a `setTimeout` with a minimal delay (10ms) to allow the browser to render the "Finding..." state before starting the heavy calculation loop.

```javascript
setTimeout(() => {
  const evens = [];
  const odds = [];

  // Logic to separate evens and odds
  for (let n = 0; n <= v; n++) {
    n % 2 ? odds.push(n) : evens.push(n);
  }

  // Animate the results
  animateAppend($(".evens"), evens);
  animateAppend($(".odds"), odds);

  // Re-enable the button
  button.prop("disabled", false).text("Find");
}, 10);
```

---

## Key jQuery Methods Used

| Method | Description |
| :--- | :--- |
| `$(selector)` | Selects elements from the DOM (e.g., `$("#id")`, `$(".class")`). |
| `.val()` | Gets the value of an input field. |
| `.text(content)` | Sets the text content of an element. |
| `.append(content)` | Inserts content at the end of the selected elements. |
| `.remove()` | Removes the set of matched elements from the DOM. |
| `.prop(property, value)` | Sets a property (like `disabled`) for the selected elements. |
| `.click(handler)` | Attaches a function to run when a click event occurs. |

---

## Practice Challenge

Try modifying the code to:
1.  **Reverse the order**: Display numbers from the input down to 0.
2.  **Color coding**: Make even numbers blue and odd numbers red using CSS classes and jQuery's `.addClass()`.
3.  **Speed control**: Add an input to let the user control the animation speed (`delayIncrement`).
