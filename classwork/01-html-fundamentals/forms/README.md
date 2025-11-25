# HTML Forms

Forms are essential for collecting user input on websites. This module covers all form elements, input types, validation, and best practices.

## What You Will Learn

-   **Form Structure**: `<form>`, `<fieldset>`, `<legend>`
-   **Input Types**: Text, email, password, number, date, etc.
-   **Form Elements**: Textarea, select, radio, checkbox
-   **Labels and Accessibility**: Proper labeling for screen readers
-   **Form Validation**: HTML5 validation attributes
-   **Form Submission**: GET vs POST methods

---

## Basic Form Structure

```html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <button type="submit">Submit</button>
</form>
```

**Key attributes**:
-   `action` - Where to send form data
-   `method` - HTTP method (GET or POST)
-   `name` - Identifies the field in submitted data
-   `id` - Links label to input (for accessibility)

---

## Input Types

### Text Inputs

```html
<!-- Basic text -->
<input type="text" name="name" placeholder="Enter your name">

<!-- Email (with validation) -->
<input type="email" name="email" required>

<!-- Password (hidden text) -->
<input type="password" name="password" minlength="8">

<!-- Search -->
<input type="search" name="query">

<!-- URL -->
<input type="url" name="website">

<!-- Tel (phone number) -->
<input type="tel" name="phone" pattern="[0-9]{10}">
```

### Number and Range

```html
<!-- Number input -->
<input type="number" name="age" min="0" max="120" step="1">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100" value="50">
```

### Date and Time

```html
<!-- Date picker -->
<input type="date" name="birthday">

<!-- Time picker -->
<input type="time" name="appointment">

<!-- Date and time -->
<input type="datetime-local" name="meeting">

<!-- Month picker -->
<input type="month" name="expiry">

<!-- Week picker -->
<input type="week" name="week">
```

### Other Input Types

```html
<!-- Color picker -->
<input type="color" name="theme-color" value="#ff0000">

<!-- File upload -->
<input type="file" name="document" accept=".pdf,.doc">

<!-- Hidden field -->
<input type="hidden" name="user-id" value="12345">
```

---

## Form Elements

### Textarea

For multi-line text input:

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="30"></textarea>
```

### Select Dropdown

```html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="">--Select--</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="bt">Bhutan</option>
</select>
```

**Multiple selection**:
```html
<select name="skills" multiple>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
</select>
```

### Radio Buttons

For single selection from multiple options:

```html
<fieldset>
    <legend>Gender:</legend>
    <label>
        <input type="radio" name="gender" value="male"> Male
    </label>
    <label>
        <input type="radio" name="gender" value="female"> Female
    </label>
    <label>
        <input type="radio" name="gender" value="other"> Other
    </label>
</fieldset>
```

**Important**: All radio buttons in a group must have the same `name` attribute.

### Checkboxes

For multiple selections:

```html
<fieldset>
    <legend>Interests:</legend>
    <label>
        <input type="checkbox" name="interests" value="coding"> Coding
    </label>
    <label>
        <input type="checkbox" name="interests" value="music"> Music
    </label>
    <label>
        <input type="checkbox" name="interests" value="sports"> Sports
    </label>
</fieldset>
```

---

## Labels and Accessibility

Always use labels for form inputs:

```html
<!-- Method 1: Using 'for' attribute -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Method 2: Wrapping input -->
<label>
    Email:
    <input type="email" name="email">
</label>
```

**Benefits**:
-   Screen readers can announce the label
-   Clicking the label focuses the input
-   Better user experience

---

## HTML5 Validation

### Required Fields

```html
<input type="text" name="username" required>
```

### Pattern Matching

```html
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
```

### Min/Max Length

```html
<input type="password" minlength="8" maxlength="20">
```

### Min/Max Values

```html
<input type="number" min="1" max="100">
```

### Custom Validation Messages

```html
<input type="email" required 
       oninvalid="this.setCustomValidity('Please enter a valid email')"
       oninput="this.setCustomValidity('')">
```

---

## Fieldset and Legend

Group related form elements:

```html
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname">
        
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname">
    </fieldset>
    
    <fieldset>
        <legend>Contact Information</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </fieldset>
</form>
```

---

## Button Types

```html
<!-- Submit button (submits form) -->
<button type="submit">Submit</button>

<!-- Reset button (clears form) -->
<button type="reset">Reset</button>

<!-- Regular button (no default action) -->
<button type="button" onclick="doSomething()">Click Me</button>
```

---

## Form Methods

### GET Method

```html
<form action="/search" method="GET">
    <input type="text" name="q">
    <button type="submit">Search</button>
</form>
```

-   Data appears in URL: `?q=search+term`
-   Used for searches, filters
-   Can be bookmarked
-   Limited data size

### POST Method

```html
<form action="/register" method="POST">
    <input type="email" name="email">
    <input type="password" name="password">
    <button type="submit">Register</button>
</form>
```

-   Data sent in request body
-   Used for sensitive data (passwords, etc.)
-   No size limit
-   Cannot be bookmarked

---

## Best Practices

1.  **Always use labels** - For accessibility
2.  **Use appropriate input types** - Better mobile keyboards
3.  **Provide clear error messages** - Use `title` attribute
4.  **Group related fields** - Use `<fieldset>` and `<legend>`
5.  **Use placeholders wisely** - Don't replace labels
6.  **Validate on both client and server** - Never trust client-side only
7.  **Make required fields obvious** - Use asterisks or "required" text
8.  **Test with keyboard only** - Ensure tab order makes sense

---

## Common Patterns

### Login Form

```html
<form action="/login" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <label>
        <input type="checkbox" name="remember"> Remember me
    </label>
    
    <button type="submit">Login</button>
</form>
```

### Contact Form

```html
<form action="/contact" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject">
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>
    
    <button type="submit">Send</button>
</form>
```

---

## Practice Challenge

Create a registration form with:
1.  Username (text, 3-15 characters)
2.  Email (email type, required)
3.  Password (password type, min 8 characters)
4.  Confirm Password (must match)
5.  Date of Birth (date picker)
6.  Gender (radio buttons)
7.  Interests (checkboxes)
8.  Country (dropdown)
9.  Terms & Conditions (checkbox, required)
10. Submit and Reset buttons
