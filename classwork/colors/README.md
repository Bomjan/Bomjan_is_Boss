# CSS Colors

This project demonstrates how to use colors in CSS, including different color formats and properties.

## What You Will Learn

-   **Color Formats**: RGB, HEX, HSL, and named colors.
-   **Color Properties**: `color`, `background-color`, `border-color`.
-   **Opacity**: Using `rgba()` and `opacity` property.
-   **Color Theory Basics**: Understanding how colors work together.

---

## CSS Color Formats

### 1. Named Colors

CSS has 140+ predefined color names.

```css
.element {
  color: red;
  background-color: lightblue;
}
```

---

### 2. Hexadecimal (HEX)

Six-digit codes representing RGB values.

```css
.element {
  color: #FF5733; /* Red-Orange */
  background-color: #3498DB; /* Blue */
}
```

**Format**: `#RRGGBB` where each pair is a hexadecimal value (00-FF).

---

### 3. RGB (Red, Green, Blue)

Specify colors using red, green, and blue values (0-255).

```css
.element {
  color: rgb(255, 87, 51); /* Same as #FF5733 */
}
```

---

### 4. RGBA (RGB with Alpha)

Same as RGB but with an alpha channel for transparency (0.0 to 1.0).

```css
.element {
  background-color: rgba(52, 152, 219, 0.5); /* 50% transparent blue */
}
```

---

### 5. HSL (Hue, Saturation, Lightness)

A more intuitive way to work with colors.

```css
.element {
  color: hsl(204, 70%, 53%); /* Blue */
}
```

-   **Hue**: 0-360 (color wheel position)
-   **Saturation**: 0%-100% (color intensity)
-   **Lightness**: 0%-100% (brightness)

---

## Common Color Properties

| Property | Description |
| :--- | :--- |
| `color` | Sets the text color. |
| `background-color` | Sets the background color of an element. |
| `border-color` | Sets the color of borders. |
| `opacity` | Sets the transparency of an entire element (0.0 to 1.0). |

---

## Color Contrast

When choosing colors, ensure good contrast between text and background for readability:

-   **Good**: Dark text on light background, or light text on dark background.
-   **Bad**: Light gray text on white background (hard to read).

---

## Practice Challenge

Try creating a color palette with:
1.  A primary color for headings
2.  A secondary color for backgrounds
3.  A neutral color for body text
4.  An accent color for buttons or links
