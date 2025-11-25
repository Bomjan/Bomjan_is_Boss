# Form Validation

This project demonstrates how to implement client-side form validation using JavaScript. It ensures that user input meets specific criteria before the form is submitted.

## What You Will Learn

-   **Preventing Default Behavior**: Using `e.preventDefault()` to stop the form from reloading the page.
-   **Value Retrieval**: Getting values from input fields.
-   **Conditional Logic**: Checking if passwords match.
-   **Regex Validation**: Using Regular Expressions to validate email formats.
-   **DOM Updates**: Displaying error messages dynamically.

---

## Features

-   **Email Validation**: Checks if the entered email follows a valid format (e.g., `user@example.com`).
-   **Password Matching**: Ensures that the "Password" and "Confirm Password" fields are identical.
-   **Error Feedback**: Displays specific error messages in red text below the corresponding fields.

---

## Code Walkthrough

### 1. Event Listener

We attach a `submit` event listener to the form.

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form submission
  // ...
});
```

### 2. Password Matching

We compare the values of the two password fields.

```javascript
if (pass1 != pass2) {
  const msg = document.getElementById("error3");
  msg.textContent = "Password Didn't Match";
  msg.style.color = "red";
}
```

### 3. Email Regex

We use a Regular Expression (Regex) to test the email string.

```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!emailRegex.test(email)) {
  // Show email error...
}
```

*   **`^`**: Start of string.
*   **`[a-zA-Z0-9._%+-]+`**: User name (letters, numbers, dots, etc.).
*   **`@`**: The "@" symbol.
*   **`[a-zA-Z0-9.-]+`**: Domain name.
*   **`\.`**: A literal dot.
*   **`[a-zA-Z]{2,}`**: Top-level domain (at least 2 letters, e.g., .com).
*   **`$`**: End of string.
