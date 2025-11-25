# CSS Grid Layouts

This folder contains examples of CSS Grid, a powerful layout system for creating two-dimensional layouts on the web. It includes both basic grid examples and named grid areas.

## What You Will Learn

-   **CSS Grid Basics**: Creating grid containers and defining rows and columns.
-   **Grid Template Areas**: Using named areas to create intuitive layouts.
-   **Responsive Grids**: Making grids adapt to different screen sizes.
-   **Grid Gap**: Adding spacing between grid items.
-   **Bootstrap Integration**: Using Bootstrap's grid system alongside custom CSS.

---

## Files in This Folder

### 1. `index.html`
A Bootstrap-based navigation example showing how to use Bootstrap's grid system and components.

### 2. `another.html`
Additional grid examples (content to be reviewed).

### 3. `named_grids.html`
Demonstrates CSS Grid with named template areas for creating complex layouts easily.

---

## CSS Grid Fundamentals

### Creating a Grid Container

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  grid-template-rows: auto;
  gap: 20px; /* Space between items */
}
```

### Using Named Grid Areas

Named areas make it easy to visualize and create layouts:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

---

## Key Grid Properties

| Property | Description |
| :--- | :--- |
| `display: grid` | Creates a grid container. |
| `grid-template-columns` | Defines the number and size of columns. |
| `grid-template-rows` | Defines the number and size of rows. |
| `grid-template-areas` | Creates named areas for placing items. |
| `gap` | Sets spacing between grid items (replaces `grid-gap`). |
| `grid-area` | Assigns an element to a named grid area. |
| `fr` unit | Fractional unit representing a fraction of available space. |

---

## Common Grid Patterns

### Equal Columns
```css
grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
```

### Responsive Auto-fit
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
/* Creates as many columns as fit, each at least 250px */
```

### Fixed Sidebar + Flexible Content
```css
grid-template-columns: 250px 1fr;
/* Sidebar is 250px, content takes remaining space */
```
