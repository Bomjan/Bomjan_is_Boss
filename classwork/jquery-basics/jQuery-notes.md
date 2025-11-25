# jQuery Script Explanation

This document explains the jQuery script used in `index.html` for the number sorting application.

## 1. Document Ready

```javascript
$(document).ready(() => {
  // All other code goes here...
});
```

This is the standard jQuery entry point. The code inside this function is guaranteed to run only after the entire HTML document has been fully loaded and the Document Object Model (DOM) is ready to be manipulated. This prevents errors that can occur from trying to select an element before it exists on the page.

---

## 2. The `animateAppend` Helper Function

```javascript
function animateAppend(container, items) {
  let delay = 0;
  const delayIncrement = 20; // milliseconds

  items.forEach((item) => {
    const p = $(`<p>${item}</p>`);
    setTimeout(() => {
      container.append(p);
    }, delay);
    delay += delayIncrement;
  });
}
```

This function is designed to create a visually appealing "staggered" animation effect where numbers appear one after another.

- **Purpose:** Instead of adding all numbers to the screen at once, it adds them with a small, increasing delay.
- **`delay` & `delayIncrement`:** A `delay` variable starts at 0. For each number, a `setTimeout` is scheduled to append the number after the current `delay`. The `delay` is then increased by `delayIncrement` (20ms) for the next number.
- **`forEach` loop:** It iterates through the array of numbers (`items`) and creates a new `<p>` element for each one.
- **`setTimeout`:** This is the key to the animation. It tells the browser to run a piece of code (appending the `<p>` tag) after a specified number of milliseconds. Because the delay increases with each iteration, the numbers appear sequentially rather than all at once.

---

## 3. The Main Click Event Handler

```javascript
$("#button").click(() => {
  // ... function logic ...
});
```

This code attaches an event listener to the "Find" button. The function inside runs every time the button is clicked.

### Inside the Click Handler

1.  **Element Selection & Setup:**

    - `const button = $("#button");` : Selects the button element.
    - `const messageEl = $(".message");`: Selects the `<small>` tag used for error messages.
    - `const v = parseInt($("#input").val(), 10);`: Gets the text from the input field and converts it into an integer.

2.  **Clear Previous State:**

    - `$(".odds p").remove();` & `$(".evens p").remove();`: Before adding new results, this removes any `<p>` tags from previous runs.
    - `messageEl.text("");`: Clears any old error messages.

3.  **Input Validation:**

    - `if (isNaN(v) || v < 0 || ...)`: This checks if the input is invalid (e.g., not a number, a negative number, or just empty spaces). If it is, an error message is shown, and `return;` stops the function immediately.

4.  **Set Loading State:**

    - `button.prop("disabled", true).text("Finding...");`: This provides immediate user feedback. The button is disabled to prevent multiple clicks, and its text is changed to "Finding...".

5.  **Process and Display Results:**
    - **`setTimeout(() => { ... }, 10);`**: This is a crucial UX trick. The heavy work (the `for` loop) is wrapped in a `setTimeout`. This gives the browser a brief moment (10ms) to update the screen and show the "Finding..." text on the button _before_ it gets busy with the calculations. Without this, the UI would freeze and the button text wouldn't update until after the loop was finished.
    - **The `for` loop:** It iterates from 0 to the user's number (`v`) and sorts each number into the `evens` or `odds` array using the modulo (`%`) operator.
    - **`animateAppend(...)`:** The helper function is called for both the `evens` and `odds` arrays to display the results on the screen with the staggered animation.
    - **Restore Button:** `button.prop("disabled", false).text("Find");` runs after all the numbers have been processed and scheduled for animation, re-enabling the button and setting its text back to "Find".
