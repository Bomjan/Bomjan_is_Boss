# Assignment 2: Personal Portfolio

This assignment involves creating a personal portfolio website using HTML and CSS. It focuses on layout, styling, and presenting personal information in a professional manner.

## What You Will Learn

-   **CSS Layouts**: Using Flexbox or Grid to create multi-column layouts (e.g., sidebar and main content).
-   **Styling**: Applying fonts, colors, borders, and spacing to enhance visual appeal.
-   **Semantic HTML**: Using appropriate tags like `<div>`, `<h3>`, `<p>`, and `<ul>` to structure content.
-   **External CSS**: Linking an external stylesheet (`style.css`) to the HTML file.

---

## Project Structure

-   **index.html**: The main structure of the portfolio.
-   **style.css**: All the styling rules for the portfolio.
-   **image/**: Directory containing profile pictures and icons.

---

## Code Walkthrough

### 1. Layout Structure

The portfolio is divided into two main columns using a container class (e.g., `.zam`).

```html
<div class="zam">
    <div class="col1">
        <!-- Sidebar: Contact, Education, Skills -->
    </div>
    <div class="col2">
        <!-- Main Content: Name, About, Experience -->
    </div>
</div>
```

### 2. Styling Sections

Each section (Education, Skills, etc.) follows a consistent pattern with a header and a decorative line.

```html
<div class="edu">
    <h3>Education</h3>
    <div class="line"></div>
    <!-- Content -->
</div>
```

### 3. Contact Information

Contact details are grouped in the sidebar for easy access.

```html
<div class="info">
    <p>+975 17557031</p>
    <p>Thimphu, Kabesa</p>
    <p>sundrabomjan@gmail.com</p>
</div>
```