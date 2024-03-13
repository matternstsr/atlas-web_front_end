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
// YOU HAVE TO USE A BLANK HTML TO TST THIS PROPERLY. I MADE A BLANK .HTML IN NOTEPAD AND THEN ACCESSED IT.

function createElement(data) {
  let paragraph = document.createElement('p');
  let text = document.createTextNode(data);
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

function handleWikipediaResponse(data) {
  if (data) {
    createElement(data);
  } else {
    console.error('Error: Wikipedia response is empty');
  }
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let pages = response.query.pages;
        let firstPageId = Object.keys(pages)[0];
        let extract = pages[firstPageId]?.extract;
        callback(extract);
      } else {
        console.error('Error fetching data from Wikipedia. Status code: ' + xhr.status);
      }
    }
  };
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  xhr.send();
}

// Call queryWikipedia with createElement as callback.....
queryWikipedia(handleWikipediaResponse);
