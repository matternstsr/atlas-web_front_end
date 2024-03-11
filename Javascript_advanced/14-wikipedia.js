// 14. Simple callback
// Write a new function named createElement:
// It accepts one argument data (String)
// It creates a paragraph element
// The content of the paragraph is set to data
// It appends to the document body the paragraph
// Create a new function named queryWikipedia:
// It accepts one argument callback (function)
// Using XMLHttpRequest, it get the article of Stack Overflow with the URL https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*
// Once the fetch is correctly executed, it calls the callback function with the extract of the API response
// Call queryWikipedia with createElement as callback
// Requirements:
// Use vanilla javascript to run the Ajax query (no jQuery or other framework)
// You must not call createElement within queryWikipedia directly

