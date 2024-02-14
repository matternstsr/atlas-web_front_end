# HTML Form Project

## Table of Contents
1. [Basic Comment Structure](#1-basic-comment-structure)
2. [More Comment Basic Structure](#2-more-comment-basic-structure)
3. [Create Labels and Input Container](#3-create-labels-and-input-container)
4. [Create the Inputs](#4-create-the-inputs)
5. [Add Help Messages](#5-add-help-messages)
6. [Add Pure HTML / CSS Error Handling](#6-add-pure-html--css-error-handling)
7. [Add the Search Form](#7-add-the-search-form)

## 1. Basic Comment Structure

From `00-article.html`, create `01-article.html`:

- Sibling to the `<div class="post">`, create a new `<section>` with the class `post-comments`.
- Inside the section, create a header.
- In the `<header>`, create a heading level 2 with class `section-title` and text: "Leave a comment".
- Under the level 2 heading, create a paragraph with text: "All fields are required".
- Create a form sibling to the header with:
  - Action: `#`
  - Method: `post`

From `01-styles.css`, create `01-styles.css` with appropriate styles.

## 2. More Comment Basic Structure

From `01-article.html`, create `02-article.html`:

In the form in the comment section:

- Create a first fieldset with a legend that has the text "Your personal information" and the class `visually-hidden`.
- In the fieldset, create three divs with the classes `form-group` and appropriate column classes.
- Create a second fieldset with a legend that has the text "Your comment" and the class `visually-hidden`.
- In the second fieldset, create three divs with the classes `form-group`.

From `01-styles.css`, create `02-styles.css` with appropriate styles.

## 3. Create Labels and Input Container

From `02-article.html`, create `03-article.html` and in the form which is in the comment section:

#### In the first fieldset:

1. In the first div (which has classes `form-group` and `col-1-2`), create a label:
   - **For:** `your-first-name`
   - **Text:** "First Name"
   - Sibling to the label, create a `<div>` with the class `form-field`
   - Create a `<span>` inside the div with the class `form-field-container`

2. In the second div (which has classes `form-group` and `col-1-2`), create a label:
   - **For:** `your-last-name`
   - **Text:** "Last Name"
   - Sibling to the label, create a `<div>` with the class `form-field`
   - Create a `<span>` inside the div with the class `form-field-container`

#### In the second fieldset:

1. In the first div (which has classes `form-group` and `col-2-3`), create a label:
   - **For:** `your-title`
   - **Text:** "Title"
   - Sibling to the label, create a `<div>` with the class `form-field`
   - Create a `<span>` inside the div with the class `form-field-container`

2. In the second div (which has classes `form-group` and `col-2-3`), create a label:
   - **For:** `your-comment`
   - **Text:** "Comment"
   - Sibling to the label, create a `<div>` with the class `form-field`
   - Create a `<span>` inside the div with the class `form-field-container`

3. In the third div (which has class `form-group`), create a `<button>` with the classes `button` and `button-primary`:
   - **Text:** "Post my comment"

From `02-styles.css`, create `03-styles.css` with appropriate styles.

## 4. Create the Inputs

From `03-article.html`, create `04-article.html`:

In the first fieldset:

1. In the first span of `form-field-container` class, create an input:
   - **Type:** `text`
   - **Name:** `your-first-name`
   - **Id:** `your-first-name`
   - **Placeholder:** "e.g. Mike"
   - **Pattern:** `[A-Za-zÀ-ž\s]{3,}`
   - **Max length:** 35
   - **Autocomplete:** `on`
   - **Access Key:** `f`
   - **Required:** `true`

2. In the second span of `form-field-container` class, create an input:
   - **Type:** `text`
   - **Name:** `your-last-name`
   - **Id:** `your-last-name`
   - **Placeholder:** "e.g. Smith"
   - **Pattern:** `[A-Za-zÀ-ž\s]{3,}`
   - **Max length:** 40
   - **Autocomplete:** `on`
   - **Access Key:** `l`
   - **Required:** `true`

3. In the third span of `form-field-container` class, create an input:
   - **Type:** `email`
   - **Name:** `your-email`
   - **Id:** `your-email`
   - **Placeholder:** "e.g. youremail@gmail.com"
   - **Pattern:** `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`
   - **Max length:** 55
   - **Autocomplete:** `on`
   - **Access Key:** `e`
   - **Required:** `true`

In the second fieldset:

1. In the first span of `form-field-container` class, create an input:
   - **Type:** `text`
   - **Name:** `your-title`
   - **Id:** `your-title`
   - **Placeholder:** "e.g. I loved that article"
   - **Pattern:** `[A-Za-zÀ-ž\s]{4,}`
   - **Max length:** 75
   - **Autocomplete:** `on`
   - **Access Key:** `t`
   - **Required:** `true`

2. In the second span of `form-field-container` class, create a textarea:
   - **Name:** `your-comment`
   - **Id:** `your-comment`
   - **Placeholder:** "Write your comment here"
   - **Minimum length:** 10
   - **Access Key:** `c`
   - **Required:** `true`
   - **Columns:** 30
   - **Rows:** 6

From `03-styles.css`, create `04-styles.css` with appropriate styles.

## 5. Add Help Messages

From `04-article.html`, create `05-article.html`:

In each span with `form-field-container` class that contains an input:

1. After the input, add an empty `<i>` with the class `form-field-icon`.
2. In the first fieldset:
   - Inside the first div with `form-field` class, right after the closing span tag, add a paragraph with:
     - **Class:** `form-help`
     - **Text:** "First name should be at least 3 characters and only contains letters".
   - Inside the second div with `form-field` class, right after the closing span tag, add a paragraph with:
     - **Class:** `form-help`
     - **Text:** "Last name should be at least 3 characters and only contains letters".

From `04-styles.css`, create `05-styles.css` with appropriate styles.

## 6. Add Pure HTML / CSS Error Handling

From `05-styles.css`, create `06-styles.css`:

In the variable section:

- Create custom properties for `color-red` and `color-green`.
- Create custom properties for `valid-color` and `error-color`.

At the end of the CSS file, add:

```css
/* Form error handling */
/* Add the provided CSS code for error handling */
```
From 05-article.html, create 06-article.html.

### 7. Add the Search Form

From `06-article.html`, create `07-article.html`:

In the navigation:

- Add a new `<li>` with the class `nav-item`.
- Create a new `<form>` inside the `<li>` with:
  - **Action** attribute: `#`
  - **Method** attribute: `post`
  - **Class**: `form-search`.
- Create a new input, type search, with:
  - **Name** attribute: `q`
  - **Id** attribute: `search-input`
  - **Placeholder**: "Search..."
  - **aria-label**: "Search through site content"
- Create a button with the class `search-button` and an SVG icon for search.

From `06-styles.css`, create `07-styles.css` with appropriate styles.

This Markdown document provides structured information about the HTML form project, including instructions for each step and corresponding CSS stylesheets.