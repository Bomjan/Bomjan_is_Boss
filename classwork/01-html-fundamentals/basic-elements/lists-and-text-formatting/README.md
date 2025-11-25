# HTML Lists and Text Formatting

This module covers HTML list types and various text formatting elements used to structure and style content semantically.

## What You Will Learn

-   **List Types**: Ordered, unordered, and description lists
-   **Text Formatting**: Emphasis, importance, highlighting, and more
-   **Semantic Elements**: Using the right tag for the right purpose
-   **Special Characters**: HTML entities and symbols
-   **Subscript/Superscript**: Mathematical and scientific notation

---

## HTML List Types

### 1. Ordered Lists (`<ol>`)

Creates numbered lists where order matters.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

**Attributes**:
-   `type="1"` - Numbers (default)
-   `type="A"` - Uppercase letters
-   `type="a"` - Lowercase letters
-   `type="I"` - Uppercase Roman numerals
-   `type="i"` - Lowercase Roman numerals
-   `start="5"` - Start from a specific number

---

### 2. Unordered Lists (`<ul>`)

Creates bulleted lists where order doesn't matter.

```html
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ul>
```

**Common uses**: Navigation menus, feature lists, bullet points

---

### 3. Description Lists (`<dl>`)

Creates lists of term-description pairs.

```html
<dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Language</dd>
    <dd>Used for structuring web content</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

-   `<dt>` - Definition Term
-   `<dd>` - Definition Description (can have multiple per term)

**Common uses**: Glossaries, metadata, FAQs

---

## Text Formatting Elements

### Emphasis and Importance

| Element | Purpose | Visual | Semantic Meaning |
| :--- | :--- | :--- | :--- |
| `<em>` | Emphasis | Italic | Stressed emphasis |
| `<i>` | Italic | Italic | Alternative voice/mood |
| `<strong>` | Strong importance | Bold | Strong importance |
| `<b>` | Bold | Bold | Stylistically offset |

**Best Practice**: Use `<em>` and `<strong>` for semantic meaning, `<i>` and `<b>` for styling only.

---

### Text Modifications

```html
<mark>Highlighted text</mark>
<del>Deleted text</del>
<s>Strikethrough (incorrect)</s>
<small>Small print</small>
```

-   `<mark>` - Highlighted/marked text (like a highlighter)
-   `<del>` - Deleted text (shows what was removed)
-   `<s>` - Strikethrough (no longer accurate/relevant)
-   `<small>` - Fine print, disclaimers, copyright

---

### Quotations and Citations

```html
<p>According to <cite>Einstein</cite>, <q>Imagination is more important than knowledge.</q></p>

<blockquote cite="https://example.com">
    Long quotation that spans multiple lines...
</blockquote>
```

-   `<q>` - Inline quotation (adds quotes automatically)
-   `<blockquote>` - Block-level quotation
-   `<cite>` - Title of a work (book, article, etc.)

---

### Code and Technical Content

```html
<p>Use the <code>print()</code> function to output text.</p>

<pre>
    <code>
def hello():
    print("Hello, World!")
    </code>
</pre>

<p>The variable <var>x</var> represents the unknown value.</p>

<p>Press <kbd>Ctrl + C</kbd> to copy.</p>

<p>The program output: <samp>Error: File not found</samp></p>
```

-   `<code>` - Inline code snippet
-   `<pre>` - Preformatted text (preserves whitespace)
-   `<var>` - Variable or placeholder
-   `<kbd>` - Keyboard input
-   `<samp>` - Sample output

---

### Subscript and Superscript

```html
<p>H<sub>2</sub>O is the chemical formula for water.</p>
<p>E = mc<sup>2</sup> is Einstein's famous equation.</p>
<p>The formula is 2<sup>n-1</sup>.</p>
```

-   `<sub>` - Subscript (below baseline)
-   `<sup>` - Superscript (above baseline)

**Common uses**: Chemical formulas, mathematical expressions, footnotes

---

### Other Semantic Elements

```html
<p>The <dfn>DOM</dfn> is the Document Object Model.</p>

<p>The event is on <time datetime="2025-05-08">May 8, 2025</time>.</p>

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

-   `<dfn>` - Definition of a term
-   `<time>` - Date/time (machine-readable)
-   `<abbr>` - Abbreviation (with title tooltip)

---

## HTML Entities

Special characters that need to be escaped:

| Character | Entity | Description |
| :--- | :--- | :--- |
| `<` | `&lt;` | Less than |
| `>` | `&gt;` | Greater than |
| `&` | `&amp;` | Ampersand |
| `"` | `&quot;` | Quotation mark |
| `'` | `&apos;` | Apostrophe |
| ` ` | `&nbsp;` | Non-breaking space |
| `©` | `&copy;` | Copyright symbol |

---

## Best Practices

1. **Use semantic elements** - Choose tags based on meaning, not appearance
2. **Nest lists properly** - Lists can contain other lists
3. **Provide context** - Use `title` attributes for abbreviations
4. **Accessibility** - Screen readers interpret semantic tags correctly
5. **Validation** - Ensure proper nesting and closing tags

---

## Practice Challenge

Create a page with:
1.  An ordered list of your top 5 favorite movies
2.  An unordered list of programming languages you know
3.  A description list defining 3 web technologies
4.  A paragraph using at least 5 different text formatting elements
5.  A code snippet showing a simple function
