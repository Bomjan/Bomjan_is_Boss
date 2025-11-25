# CSS Transformations and Transitions

This project demonstrates advanced CSS techniques including transformations, transitions, and clip-path to create interactive card components with hover effects.

## 📚 What You Will Learn

-   **CSS Transforms**: Using `translateY()` and `scaleY()` to move and scale elements.
-   **CSS Transitions**: Creating smooth animations when properties change (e.g., on hover).
-   **Clip-path**: Creating custom shapes by clipping elements with polygon coordinates.
-   **Hover Effects**: Using `:hover` pseudo-class to trigger visual changes.
-   **Child Selectors**: Targeting child elements with `>` for specific styling.

---

## 🚀 Features

-   **Card Lift Effect**: Cards rise up when hovered, creating a 3D floating effect.
-   **Expanding Middle Section**: The middle section scales vertically on hover.
-   **Moving Sections**: Top and bottom sections move in opposite directions on hover.
-   **Custom Shapes**: Using `clip-path` to create angled edges on the top and bottom sections.

---

## 📝 Code Walkthrough

### 1. Basic Card Structure

Each card has three sections: upper, middle, and lower.

```html
<div class="card-container">
  <div class="upper"><h2>Market Growth</h2></div>
  <div class="mid"><p>Description...</p></div>
  <div class="lower"><p>Growth: 25% YoY</p></div>
</div>
```

### 2. Transitions

We define transitions on the card to make changes smooth.

```css
.card-container {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

This means when `transform` or `box-shadow` changes, it will animate over 0.3 seconds.

### 3. Hover Effects

When hovering over the card:

```css
.card-container:hover {
  transform: translateY(-10px); /* Move card up by 10px */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12); /* Increase shadow */
}
```

### 4. Child Element Transformations

We target specific children when the parent is hovered:

```css
.card-container:hover > .upper {
  transform: translateY(-50px); /* Move top section up */
}

.card-container:hover > .mid {
  transform: scaleY(1.5); /* Stretch middle section vertically */
}

.card-container:hover > .lower {
  transform: translateY(50px); /* Move bottom section down */
}
```

### 5. Clip-path for Custom Shapes

The `clip-path` property creates angled edges:

```css
.upper {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 70%);
  /* Creates a shape: top-left, top-right, bottom-right, bottom-left */
}
```

The coordinates are percentages: `(x y)` where:
-   `0 0` = top-left corner
-   `100% 0` = top-right corner
-   `100% 100%` = bottom-right corner
-   `0% 70%` = 70% down on the left side (creates the angle)

---

## 💡 Key CSS Properties

| Property | Description |
| :--- | :--- |
| `transform: translateY()` | Moves an element vertically (positive = down, negative = up). |
| `transform: scaleY()` | Scales an element vertically (1 = normal, >1 = taller, <1 = shorter). |
| `transition` | Defines how properties should animate when they change. |
| `clip-path: polygon()` | Clips an element to a custom polygon shape. |
| `:hover` | Pseudo-class that applies styles when the mouse is over an element. |
