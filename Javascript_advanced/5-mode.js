// 5. Changing DOM with closure
// Create a function named changeMode:
// It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
// Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
// Write a function named main:
// Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
// Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
// Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
// Add a paragraph to the body of the page with the text Welcome Holberton!
// Add a button to the body with the text Spooky
// Add a button to the body with the text Dark mode
// Add a button to the body with the text Scream mode
// When clicking on each button, the page CSS should change to the different themes you created previously
// Call the main function
// Requirements:
// Use vanilla JavaScript to add the elements to the DOM and change the style of the page
// JQuery not allowed!

const changeMode = (size, weight, transform, background, color) => {
  return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  }
}

const main = () => {

  let spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');

  // Make and add paragraph INSIDE THE BODY
  let paragraph = document.createElement('p');
  let text = document.createTextNode('Welcome Holberton!');
  paragraph.appendChild(text);

  // Make buttons
  let buttonSpooky = document.createElement('button');
  let textSpooky = document.createTextNode('Spooky');
  buttonSpooky.appendChild(textSpooky);
  buttonSpooky.addEventListener('click', spooky);

  // Append button to the top of the body

  let buttonDark = document.createElement('button');
  let textDark = document.createTextNode('Dark mode');
  buttonDark.appendChild(textDark);
  buttonDark.addEventListener('click', darkMode);


  let buttonScream = document.createElement('button');
  let textScream = document.createTextNode('Scream mode');
  buttonScream.appendChild(textScream);
  buttonScream.addEventListener('click', screamMode);

  // Append button to the top of the body
  document.body.insertBefore(buttonScream, document.body.firstChild);
  document.body.insertBefore(buttonDark, document.body.firstChild);
  document.body.insertBefore(buttonSpooky, document.body.firstChild);
  document.body.insertBefore(paragraph, document.body.firstChild);
}

main();








