# Bootstrap Framework

This project introduces Bootstrap, a popular CSS framework for building responsive websites quickly.

## What You Will Learn

-   **What is Bootstrap**: A CSS framework with pre-built components.
-   **CDN Integration**: How to include Bootstrap in your project.
-   **Grid System**: Creating responsive layouts.
-   **Components**: Using pre-styled elements like navbars, buttons, cards.
-   **Utility Classes**: Quick styling with Bootstrap classes.

---

## What is Bootstrap?

Bootstrap is a free, open-source CSS framework that provides:
-   **Pre-styled components** (buttons, forms, navbars, etc.)
-   **Responsive grid system** for layouts
-   **JavaScript plugins** for interactive elements
-   **Consistent design** across browsers

---

## Including Bootstrap

### Using CDN (Content Delivery Network)

Add these links to your HTML `<head>`:

```html
<head>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Your content -->
    
    <!-- Bootstrap JavaScript (before closing </body>) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
```

---

## Bootstrap Grid System

Bootstrap uses a 12-column grid system for responsive layouts.

```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Column 1 (50% width on medium+ screens)</div>
        <div class="col-md-6">Column 2 (50% width on medium+ screens)</div>
    </div>
</div>
```

**Breakpoints**:
-   `col-` - Extra small (< 576px)
-   `col-sm-` - Small (≥ 576px)
-   `col-md-` - Medium (≥ 768px)
-   `col-lg-` - Large (≥ 992px)
-   `col-xl-` - Extra large (≥ 1200px)

---

## Common Components

### Navbar

```html
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">GCIT</a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
        </ul>
    </div>
</nav>
```

### Buttons

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-success">Success Button</button>
```

### Cards

```html
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

---

## Utility Classes

Bootstrap provides utility classes for quick styling:

```html
<!-- Spacing -->
<div class="mt-3">Margin top 3</div>
<div class="p-4">Padding 4</div>

<!-- Text -->
<p class="text-center">Centered text</p>
<p class="text-primary">Primary color text</p>

<!-- Display -->
<div class="d-flex justify-content-center">Flexbox centered</div>
```

---

## Customizing Bootstrap

You can override Bootstrap styles with your own CSS:

```css
/* Load after Bootstrap */
.navbar-brand {
  font-size: 24px;
  color: #ff6b6b !important;
}
```

---

## Practice Challenge

Create a responsive page with:
1.  A Bootstrap navbar
2.  A 2-column layout using the grid system
3.  At least 3 Bootstrap buttons with different colors
4.  A card component
5.  Custom CSS to modify Bootstrap's default styles
