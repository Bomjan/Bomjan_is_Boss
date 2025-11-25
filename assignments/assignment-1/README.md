# Assignment 1: Navigation and Images

This assignment demonstrates basic HTML navigation and image handling. It creates a simple multi-page website linking to profiles of famous tech figures.

## 📚 What You Will Learn

-   **Anchor Tags (`<a>`)**: Creating links between different HTML pages.
-   **Image Tags (`<img>`)**: Embedding images and controlling their size.
-   **Inline Styles**: Using the `style` attribute for basic styling (e.g., `border-radius`).
-   **File Paths**: Linking to images and files within the same directory.

---

## 🚀 Project Structure

-   **home.html**: The main landing page containing links to all profiles.
-   **std1.html**: Profile page for Elon Musk.
-   **std2.html**: Profile page for Mark Zuckerberg.
-   **std3.html**: Profile page for Jensen Huang.
-   **Images**: `musk.jpg`, `zuckerberg.jpg`, `jensen.jpg`.

---

## Code Walkthrough

### 1. Image Links

We wrap an `<img>` tag inside an `<a>` tag to make the image clickable.

```html
<a href="std1.html">
    <img src="musk.jpg" alt="Elon Musk" width="80" height="80" style="border-radius: 50%;">
</a>
```

*   **`href="std1.html"`**: The destination page.
*   **`src="musk.jpg"`**: The image source file.
*   **`style="border-radius: 50%;"`**: Makes the image circular.