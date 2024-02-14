# Accessibility Improvements README

This README provides instructions for implementing various accessibility improvements in the Atlas Web Front End project.

## 0. Make the "Works" Card Focus Visible

### Issue Description
There's an issue with focus navigation in the "Work" section, particularly in the desktop version. When navigating using the TAB key, focus isn't visually indicated on the `<a>` inside `.card-title`.

### Solution
To address this, follow these steps in your `keyboard/01-styles.css` file:

```css
/* Card WORK section */

/* CSS modifications */
```

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **Files:** `keyboard/01-styles.css`, `keyboard/01-index.html`

## 1. Add Skip-Links

### Instructions
Follow the provided steps to add skip-links to enhance accessibility in your HTML files.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **Files:** `skip-links/01-index.html`, `skip-links/01-article.html`

## 2. Ensure Sufficient Color Contrast

### Instructions
Remove body styles affecting color contrast in your HTML file.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/01-index.html`

## 3. Documents Must Have `<title>` Element to Aid in Navigation

### Instructions
Add a title to your HTML documents to aid in navigation.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/02-index.html`

## 4. `<html>` Element Must Have a `lang` Attribute

### Instructions
Add the `lang` attribute to the `<html>` tag with the appropriate language value.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/03-index.html`

## 5. Improve Image Accessibility

### Instructions
Add `alt` attributes to images for better accessibility.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/04-index.html`

## 6. Enhance Form Accessibility

### Instructions
Improve accessibility of form elements by adding appropriate labels and attributes.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/05-index.html`

## 7. Improve Icon Accessibility

### Instructions
Enhance accessibility of icons by adding appropriate aria-labels.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/06-index.html`

## 8. Enable Zooming and Scaling

### Instructions
Remove restrictions on zooming and scaling.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/07-index.html`

## 9. Ensure Proper Heading Levels and Landmarks

### Instructions
Ensure heading levels increase by only one and all page content is contained by landmarks for better accessibility.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/08-index.html`

## 10. Document Must Have One Main Landmark

### Instructions
Ensure the document has one main landmark for better accessibility.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/09-index.html`

## 11. Ensure Proper Usage of Lists

### Instructions
Ensure elements that represent a list are appropriately marked up.

### Repository Details
- **GitHub Repository:** atlas-web_front_end
- **Directory:** accessibility
- **File:** `fix-a11y/10-index.html`

## Note
Ensure to replace `link_to_repo` with the actual URL to the GitHub repository.

Feel free to reach out if you have any questions or need further assistance.

