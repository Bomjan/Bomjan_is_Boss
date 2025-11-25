# Fonts and Typography

This project demonstrates how to use custom fonts and typography in web design, including web-safe fonts, Google Fonts, and custom font files.

## What You Will Learn

-   **Font Properties**: `font-family`, `font-size`, `font-weight`, `font-style`.
-   **Web-Safe Fonts**: Fonts available on most systems.
-   **Google Fonts**: Using free fonts from Google.
-   **Custom Fonts**: Using `@font-face` to load custom font files.
-   **Typography Best Practices**: Creating readable and attractive text.

---

## Font Properties

### 1. Font Family

Specifies which font to use. Always provide fallbacks.

```css
body {
  font-family: 'Arial', 'Helvetica', sans-serif;
}
```

**Generic families** (fallbacks):
-   `serif` - Fonts with decorative strokes (e.g., Times New Roman)
-   `sans-serif` - Clean fonts without strokes (e.g., Arial)
-   `monospace` - Fixed-width fonts (e.g., Courier)
-   `cursive` - Handwriting-style fonts
-   `fantasy` - Decorative fonts

---

### 2. Font Size

Controls the size of text.

```css
h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
  /* or use rem for scalability */
  font-size: 1rem;
}
```

**Units**:
-   `px` - Pixels (fixed size)
-   `em` - Relative to parent font size
-   `rem` - Relative to root font size
-   `%` - Percentage of parent

---

### 3. Font Weight

Controls the thickness of text.

```css
h1 {
  font-weight: bold; /* or 700 */
}

p {
  font-weight: normal; /* or 400 */
}
```

**Values**: `normal` (400), `bold` (700), or numeric (100-900).

---

### 4. Font Style

```css
em {
  font-style: italic;
}
```

**Values**: `normal`, `italic`, `oblique`.

---

## Using Google Fonts

### Step 1: Choose a Font

Visit [Google Fonts](https://fonts.google.com/) and select a font.

### Step 2: Link in HTML

```html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
```

### Step 3: Use in CSS

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

---

## Custom Fonts with `@font-face`

Load custom font files from your project.

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/MyCustomFont.woff2') format('woff2'),
       url('fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

**Common formats**: `.woff2`, `.woff`, `.ttf`, `.otf`.

---

## Typography Best Practices

### Line Height

Improves readability by adding space between lines.

```css
p {
  line-height: 1.6; /* 1.5-1.8 is ideal for body text */
}
```

### Letter Spacing

Adjusts space between characters.

```css
h1 {
  letter-spacing: 2px;
}
```

### Text Alignment

```css
.center {
  text-align: center;
}
```

**Values**: `left`, `right`, `center`, `justify`.

---

## Font Pairing Tips

1.  **Contrast**: Pair a serif heading with sans-serif body text (or vice versa).
2.  **Limit fonts**: Use 2-3 fonts maximum per project.
3.  **Hierarchy**: Use different weights and sizes to create visual hierarchy.

**Example pairing**:
-   Headings: `'Playfair Display', serif` (elegant)
-   Body: `'Roboto', sans-serif` (clean)

---

## Practice Challenge

Create a page with:
1.  A Google Font for headings
2.  A different Google Font for body text
3.  Proper line-height for readability
4.  At least 3 different font weights
5.  Good contrast between heading and body fonts
