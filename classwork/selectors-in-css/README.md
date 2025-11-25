# CSS Selectors

This project demonstrates the different types of CSS selectors used to target and style HTML elements.

## What You Will Learn

-   **Element Selectors**: Targeting by tag name.
-   **Class Selectors**: Targeting by class attribute.
-   **ID Selectors**: Targeting by unique ID.
-   **Attribute Selectors**: Targeting by attribute values.
-   **Pseudo-classes**: Targeting based on element state.
-   **Combinators**: Targeting based on relationships between elements.

---

## Types of Selectors

### 1. Element Selector

Targets all elements of a specific type.

```css
p {
  color: blue;
}
```

This styles **all** `<p>` elements.

---

### 2. Class Selector

Targets elements with a specific class. Uses a dot (`.`) prefix.

```css
.title {
  font-size: 24px;
}
```

```html
<h1 class="title">Top</h1>
```

**Note**: Multiple elements can share the same class.

---

### 3. ID Selector

Targets a single element with a unique ID. Uses a hash (`#`) prefix.

```css
#content {
  background-color: lightgray;
}
```

```html
<h1 id="content">H1</h1>
```

**Best Practice**: IDs should be unique on a page.

---

### 4. Attribute Selector

Targets elements based on their attributes.

```css
a[target="_blank"] {
  color: red;
}
```

This styles all links that open in a new tab.

**Other attribute selectors**:
-   `[href^="pp"]`: Starts with "pp"
-   `[href$=".pdf"]`: Ends with ".pdf"
-   `[href*="gcit"]`: Contains "gcit"

---

### 5. Pseudo-classes

Target elements based on their state.

```css
a:hover {
  color: orange;
}

p:first-child {
  font-weight: bold;
}
```

**Common pseudo-classes**:
-   `:hover` - When mouse is over element
-   `:active` - When element is being clicked
-   `:focus` - When element has focus (e.g., input field)
-   `:first-child` - First child of parent
-   `:nth-child(n)` - Nth child of parent

---

### 6. Combinators

Target elements based on their relationship to other elements.

#### Descendant Selector (space)
```css
div p {
  color: green;
}
```
Targets all `<p>` inside `<div>` (at any level).

#### Child Selector (`>`)
```css
div > p {
  color: blue;
}
```
Targets only direct children `<p>` of `<div>`.

#### Adjacent Sibling (`+`)
```css
h1 + p {
  margin-top: 0;
}
```
Targets `<p>` immediately after `<h1>`.

---

## Selector Specificity

When multiple selectors target the same element, specificity determines which styles apply:

1.  **Inline styles** (highest priority)
2.  **ID selectors** (`#id`)
3.  **Class selectors** (`.class`)
4.  **Element selectors** (`p`, `div`)

---

## Practice Challenge

Try creating styles that:
1.  Make all paragraphs blue
2.  Make paragraphs with class "highlight" yellow
3.  Make the first paragraph bold
4.  Change link color on hover
5.  Style only links that open in a new tab
