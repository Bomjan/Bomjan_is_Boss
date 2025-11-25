# CSS Loading Animation

This project demonstrates how to create a custom loading animation using CSS Keyframes. It uses a series of `<span>` elements that grow and shrink in height to create a wave effect.

## What You Will Learn

-   **CSS Animations**: Using `@keyframes` to define animation sequences.
-   **Animation Properties**: Controlling duration, timing functions (`ease-in-out`), and iteration (`infinite`).
-   **Animation Delay**: Using `animation-delay` to stagger the start time of animations for each element, creating a sequential wave effect.
-   **Flexbox Centering**: Using Flexbox to perfectly center the loading indicator on the screen.

---

## Code Walkthrough

### 1. The HTML Structure

We use a container with 5 `<span>` elements, each representing a bar in the loading animation.

```html
<div class="loading">
  <span style="background-color: #4e9f2d"></span>
  <span style="background-color: #3f3ac7"></span>
  <!-- ... more spans ... -->
</div>
```

### 2. The Keyframes (`@keyframes`)

We define an animation named `hgrow` that changes the height of the bars.

```css
@keyframes hgrow {
  0%, 100% {
    height: 54px; // Start and end at normal height
  }
  40% {
    height: 70px; // Grow taller at 40% of the animation
  }
}
```

### 3. Staggering the Animation

To create the wave effect, we apply the same animation to all spans but add a different `animation-delay` to each one.

```css
span:nth-child(1) { animation-delay: 0s; }
span:nth-child(2) { animation-delay: 0.2s; }
span:nth-child(3) { animation-delay: 0.4s; }
// ... and so on
```

This causes the second bar to start growing 0.2s after the first, the third 0.2s after the second, etc.
