# Basic HTML Elements

This folder contains foundational HTML examples demonstrating the most common HTML elements used in web development.

## What You Will Learn

-   **HTML Document Structure**: Understanding the basic structure of an HTML document.
-   **Headings**: Using `<h1>` through `<h6>` for hierarchical content.
-   **Links**: Creating hyperlinks with `<a>` tags.
-   **Images**: Embedding images with `<img>` tags.
-   **Paragraphs**: Using `<p>` for text content.
-   **Horizontal Rules**: Using `<hr>` for visual separation.
-   **Email Links**: Creating clickable email links with `mailto:`.

---

## Key HTML Elements

### 1. Headings (`<h1>` to `<h6>`)

Headings create a hierarchy of importance, with `<h1>` being the most important and `<h6>` the least.

```html
<h1>GCIT</h1>
<h2>AI</h2>
<h3>Full Stack</h3>
```

**Best Practice**: Use only one `<h1>` per page for the main title.

---

### 2. Links (`<a>`)

The anchor tag creates clickable links to other pages or resources.

```html
<a href="about.html">Go to About Page</a>
```

**Attributes**:
-   `href`: The destination URL or file path.
-   `target="_blank"`: Opens link in a new tab.

---

### 3. Images (`<img>`)

The image tag embeds images in your page.

```html
<img src="airpure.jpg" alt="Just a random image" width="200" height="300">
```

**Attributes**:
-   `src`: Path to the image file.
-   `alt`: Alternative text (important for accessibility and SEO).
-   `width` / `height`: Dimensions in pixels.

---

### 4. Clickable Images

You can wrap an image in an anchor tag to make it clickable.

```html
<a href="about.html">
    <img src="airpure.jpg" alt="Click to learn more">
</a>
```

---

### 5. Email Links

Create links that open the user's email client.

```html
<a href="mailto:sundrabomjan@gmail.com">Email Us</a>
```

---

### 6. Horizontal Rule (`<hr>`)

Creates a thematic break or visual separator.

```html
<hr>
```

---

## HTML Document Structure

Every HTML document should follow this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

-   **`<!DOCTYPE html>`**: Declares this is an HTML5 document.
-   **`<html>`**: Root element containing all content.
-   **`<head>`**: Contains metadata (title, links to CSS, etc.).
-   **`<body>`**: Contains visible page content.

---

## Practice Challenge

Try creating a simple personal page with:
1.  A main heading with your name
2.  A paragraph describing yourself
3.  An image (can be any image)
4.  A link to your email
5.  A link to another page
