# Login & Signup System

A basic authentication interface simulation using **Local Storage**. This project demonstrates how to switch between views (Login vs. Signup) and persist user data in the browser.

## 📚 What You Will Learn

-   **Form Handling**: Capturing user input from login and registration forms.
-   **Local Storage**: Saving and retrieving data using `localStorage`.
-   **DOM Visibility**: Toggling `display: none` and `display: block` to switch screens.
-   **JSON Parsing**: Converting objects to strings (`JSON.stringify`) and back (`JSON.parse`).

---

## 🚀 Features

-   **Registration**: Users can sign up with a username (email/phone) and password.
-   **Password Validation**: Checks if "Password" and "Confirm Password" match.
-   **Data Persistence**: User credentials are saved in the browser's Local Storage.
-   **Login**: Users can log in with their registered credentials.
-   **View Switching**: Smoothly toggle between Login and Signup forms without reloading the page.

---

## 📝 Code Walkthrough

### 1. View Switching

We use simple event listeners to hide one form and show the other.

```javascript
$("go-to-signup").addEventListener("click", () => {
  $("register-form").style.display = "block";
  $("login-form").style.display = "none";
});
```

### 2. Registration Logic

When the registration form is submitted:
1.  Check if passwords match.
2.  If they match, save the data to `localStorage`.

```javascript
localStorage.setItem(
  "cred",
  JSON.stringify({ username: contact, password: pass1 })
);
```

### 3. Login Logic

When the login form is submitted:
1.  Retrieve the stored data.
2.  Compare input with stored credentials.

```javascript
let data = JSON.parse(localStorage.getItem("cred"));
if (data.username == username && data.password == password) {
  alert("Access Granted");
}
```

---

## ⚠️ Note

This is a **client-side only** demonstration. In a real application, authentication should **never** be handled purely on the client side or store passwords in Local Storage without encryption and backend verification.
