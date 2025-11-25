# Regular Expression Validation

This module covers form validation using regular expressions (regex) and the HTML5 `pattern` attribute. It includes practical examples of common validation patterns and JavaScript regex methods.

## What You Will Learn

-   **HTML5 Pattern Attribute**: Client-side validation without JavaScript
-   **Regular Expression Basics**: Syntax and common patterns
-   **JavaScript Regex Methods**: `.test()`, `.match()`, `.replace()`
-   **Common Validation Patterns**: Email, phone, password, date, URL
-   **Form Validation Best Practices**: User experience and security

---

## HTML5 Pattern Attribute

The `pattern` attribute allows you to specify a regex that the input value must match.

```html
<input 
    type="text" 
    pattern="[a-zA-Z0-9]{5,12}"
    title="Alphanumeric only, 5-12 characters"
    required
>
```

**Attributes**:
-   `pattern` - The regex pattern
-   `title` - Error message shown to user
-   `required` - Field must be filled

---

## Common Validation Patterns

### 1. Username

```html
<input 
    type="text"
    pattern="[a-zA-Z0-9]{5,12}"
    title="Alphanumeric only, 5-12 characters"
>
```

**Pattern**: `[a-zA-Z0-9]{5,12}`
-   `[a-zA-Z0-9]` - Letters and numbers only
-   `{5,12}` - Between 5 and 12 characters

---

### 2. Password

```html
<input 
    type="password"
    pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
    title="At least 8 characters with uppercase, lowercase, and digit"
>
```

**Pattern**: `(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}`
-   `(?=.*[A-Z])` - At least one uppercase letter
-   `(?=.*[a-z])` - At least one lowercase letter
-   `(?=.*[0-9])` - At least one digit
-   `.{8,}` - Minimum 8 characters

---

### 3. Phone Number

```html
<input 
    type="text"
    pattern="[0-9]{10}"
    title="10 digit phone number"
>
```

**Pattern**: `[0-9]{10}`
-   Exactly 10 digits

**Alternative** (with formatting):
```javascript
const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// Matches: (123) 456-7890, 123-456-7890, 123.456.7890
```

---

### 4. Email

```html
<input 
    type="email"
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
>
```

**Pattern**: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
-   `^` - Start of string
-   `[a-zA-Z0-9._%+-]+` - Username part
-   `@` - At symbol
-   `[a-zA-Z0-9.-]+` - Domain name
-   `\.` - Literal dot
-   `[a-zA-Z]{2,}` - TLD (at least 2 letters)
-   `$` - End of string

---

## JavaScript Regex Methods

### 1. `.test()` - Check if pattern matches

```javascript
const regex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;
const date = "12-12-2025";
console.log(regex.test(date)); // true
```

Returns `true` or `false`.

---

### 2. `.match()` - Extract matches

```javascript
const regex = /\b[A-Z][a-zA-Z]*\b/g;
const text = "Hello there, how You Doing";
console.log(text.match(regex)); // ["Hello", "You", "Doing"]
```

Returns array of matches or `null`.

---

### 3. `.replace()` - Replace matches

```javascript
const regex = /apple/gi;
const text = "Apple is red. Apple can be sold";
console.log(text.replace(regex, "orange"));
// "orange is red. orange can be sold"
```

**Flags**:
-   `g` - Global (all matches)
-   `i` - Case-insensitive

---

## Regex Syntax Reference

### Character Classes

| Pattern | Matches |
| :--- | :--- |
| `[abc]` | Any character a, b, or c |
| `[^abc]` | Any character except a, b, or c |
| `[a-z]` | Any lowercase letter |
| `[A-Z]` | Any uppercase letter |
| `[0-9]` | Any digit |
| `\d` | Any digit (same as `[0-9]`) |
| `\w` | Word character (letter, digit, underscore) |
| `\s` | Whitespace |
| `.` | Any character except newline |

### Quantifiers

| Pattern | Matches |
| :--- | :--- |
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 (optional) |
| `{n}` | Exactly n times |
| `{n,}` | n or more times |
| `{n,m}` | Between n and m times |

### Anchors

| Pattern | Matches |
| :--- | :--- |
| `^` | Start of string |
| `$` | End of string |
| `\b` | Word boundary |

### Special Patterns

| Pattern | Purpose |
| :--- | :--- |
| `(?=...)` | Positive lookahead |
| `(?!...)` | Negative lookahead |
| `\|` | OR operator |
| `(...)` | Capture group |

---

## Practical Examples

### Date (DD-MM-YYYY)

```javascript
const dateRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
const date = "12-12-2025";
console.log(dateRegex.test(date)); // true
```

### Hashtags

```javascript
const hashtagRegex = /#[a-zA-Z]+/g;
const text = "I love #coding and #webdev";
console.log(text.match(hashtagRegex)); // ["#coding", "#webdev"]
```

### URL

```javascript
const urlRegex = /^https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/;
const url = "https://example.com";
console.log(urlRegex.test(url)); // true
```

### Words Ending in "ing"

```javascript
const ingRegex = /\b[a-zA-Z]+ing\b/g;
const text = "I love playing guitar and singing";
console.log(text.match(ingRegex)); // ["playing", "singing"]
```

### 12-Hour Time Format

```javascript
const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/;
const time = "10:50 PM";
console.log(timeRegex.test(time)); // true
```

---

## Best Practices

1. **Provide clear error messages** - Use the `title` attribute
2. **Client + Server validation** - Never trust client-side only
3. **Test thoroughly** - Use regex testers like regex101.com
4. **Keep it simple** - Complex regex is hard to maintain
5. **Escape special characters** - Use `\` for literal matches
6. **Use anchors** - `^` and `$` prevent partial matches

---

## Common Mistakes

### Incorrect Quantifier Syntax

```html
<!-- Wrong -->
<input pattern="[a-z]{1-5}">

<!-- Correct -->
<input pattern="[a-z]{1,5}">
```

Use comma (`,`) not dash (`-`) in quantifiers.

### Missing Anchors

```javascript
// Matches "1234" in "12345"
const regex = /[0-9]{4}/;

// Matches only if entire string is 4 digits
const regex = /^[0-9]{4}$/;
```

---

## Practice Challenge

Create a registration form with validation for:
1.  Username (3-15 characters, letters and numbers only)
2.  Email (valid email format)
3.  Password (min 8 chars, 1 uppercase, 1 lowercase, 1 digit)
4.  Phone (10 digits)
5.  Date of birth (DD-MM-YYYY format)

Use both HTML5 `pattern` attribute and JavaScript validation.
