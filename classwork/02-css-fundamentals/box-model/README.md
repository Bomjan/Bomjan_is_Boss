# CSS Box Model

The box model is fundamental to CSS layout. Every element is a rectangular box with content, padding, border, and margin.

## What You Will Learn

-   **Box Model Components**: Content, padding, border, margin
-   **Box Sizing**: `content-box` vs `border-box`
-   **Width and Height**: How they're calculated
-   **Margin Collapsing**: When margins combine

---

## Box Model Components

```
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |     Border          |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

### Content
The actual content (text, images, etc.)

### Padding
Space between content and border
```css
.box {
  padding: 20px; /* All sides */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 10px 20px 30px 40px; /* Top | Right | Bottom | Left */
}
```

### Border
Line around padding
```css
.box {
  border: 2px solid #333;
  border-width: 2px;
  border-style: solid;
  border-color: #333;
}
```

### Margin
Space outside border
```css
.box {
  margin: 20px;
  margin: 10px auto; /* Vertical | Horizontal (auto centers) */
}
```

---

## Box Sizing

### content-box (default)
Width/height applies to content only
```css
.box {
  box-sizing: content-box; /* default */
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 200 + 40 + 10 = 250px */
}
```

### border-box (recommended)
Width/height includes padding and border
```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Total width = 200px (includes padding and border) */
}
```

**Best Practice**: Use `border-box` globally
```css
* {
  box-sizing: border-box;
}
```

---

## Margin Collapsing

Vertical margins of adjacent elements collapse to the larger value:

```html
<div style="margin-bottom: 30px;">Box 1</div>
<div style="margin-top: 20px;">Box 2</div>
<!-- Gap between boxes is 30px, not 50px -->
```

**Doesn't happen with**:
- Horizontal margins
- Padding
- Floated elements
- Absolutely positioned elements

---

## Practice Challenge

Create three boxes with:
1.  Different padding values
2.  Different border styles
3.  Centered using `margin: 0 auto`
4.  Using `border-box` sizing
