# Linking CSS to HTML

This project demonstrates the different methods of applying CSS styles to HTML documents.

## What You Will Learn

-   **External Stylesheets**: Linking separate CSS files.
-   **Internal Styles**: Using `<style>` tags in the HTML head.
-   **Inline Styles**: Applying styles directly to elements.
-   **Best Practices**: When to use each method.

---

## Three Ways to Add CSS

### 1. External Stylesheet (Recommended)

Link a separate CSS file using the `<link>` tag in the `<head>` section.

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**Advantages**:
-   Keeps HTML and CSS separate (better organization)
-   CSS can be reused across multiple pages
-   Easier to maintain
-   Browser can cache the CSS file

---

### 2. Internal Styles

Write CSS directly in the HTML file using `<style>` tags.

```html
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
        }
    </style>
</head>
```

**When to use**:
-   Single-page websites
-   Page-specific styles that won't be reused

---

### 3. Inline Styles

Apply styles directly to individual elements using the `style` attribute.

```html
<p style="color: red; font-size: 18px;">This is red text.</p>
```

**When to use**:
-   Quick testing
-   Email HTML (where external CSS isn't supported)

**Disadvantages**:
-   Hard to maintain
-   Mixes content with presentation
-   Highest specificity (can override other styles)

---

## The `<link>` Tag Attributes

```html
<link rel="stylesheet" href="style.css">
```

-   **`rel="stylesheet"`**: Defines the relationship (this is a stylesheet)
-   **`href="style.css"`**: Path to the CSS file

**Relative paths**:
-   `href="style.css"` - Same directory
-   `href="css/style.css"` - In a subdirectory
-   `href="../style.css"` - Parent directory

---

## Multiple Stylesheets

You can link multiple CSS files:

```html
<head>
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="layout.css">
    <link rel="stylesheet" href="theme.css">
</head>
```

**Common pattern**:
-   `base.css` - Reset/normalize styles
-   `layout.css` - Page structure
-   `theme.css` - Colors and typography

---

## Best Practices

1.  **Use external stylesheets** for most projects
2.  **Place `<link>` tags in `<head>`** for faster rendering
3.  **Avoid inline styles** unless absolutely necessary
4.  **Organize CSS files** in a dedicated folder (e.g., `css/` or `styles/`)
5.  **Use meaningful filenames** (e.g., `style.css`, `main.css`)

---

## Practice Challenge

Create a project with:
1.  An external stylesheet for general styles
2.  Internal styles for page-specific elements
3.  One inline style (just to practice)

Then refactor to use only external styles for cleaner code!
