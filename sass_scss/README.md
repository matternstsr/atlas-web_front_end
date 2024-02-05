# Project Name: Sass & Scss Mastery

## Overview
This project, led by Guillaume, CTO at Holberton School, is designed to enhance your skills in Sass and Scss. The goal is to gradually progress from an amateur level to mastery by completing a series of tasks.

## Learning Objectives
By the end of this project, you should be able to:

- Understand what Sass means
- Write Sass & Scss files proficiently
- Differentiate between Sass and Scss
- Grasp the concept of Sass preprocessing
- Declare variables and use nested definitions
- Import Sass files and use mixins
- Declare extend/inheritance styles
- Manipulate operators in Sass

## Resources
Before diving into the tasks, make sure to review the following:

- Sass Basics
- Sass flow control directives: @if, @for, @each, and @while
- Sass references

## Requirements
### General
- Allowed editors: vi, vim, emacs
- Execution on Ubuntu 18.04 LTS using Sass 3.7.4 (or higher)
- Files end with a new line
- Scss files contain a comment at the beginning
- Files start with a comment describing the task
- A README.md file at the root of the project folder

### Installation Guide
```bash
$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
```

# Sass Quiz

## Question #0
What Sass means?

- Super Awesome StyleSheets
- Syntactically Augmented StyleSheets
- Syntactically Awesome StyleSheets
- Simply Awesome StyleSheets

## Question #1
Who designed Sass?
- Hampton Catlin

## Question #2
How to declare a variable?
- $my_var

## Question #3
How to import a file?
- @import 'my_file';

## Question #4
How to create a “for each” loop?
- @each $my_item in $my_list

## Question #5
How to create a “while” loop?
- @while $i < 10

## Question #6
Does Sass allow function creation?
- Yes

# Exercise 0: Always debugging!

## Mandatory

Write a Sass file that prints "Hello world" in the debug output.

```scss
// File: sass_scss/0-debug_log.scss

body {
  background-color: #fff; // Just a sample style, you can modify as needed
  // Debug statement to print "Hello world" in the debug output
  @debug "Hello world";
}
```

To test the file, run the following command:
guillaume@ubuntu:~/$ sass sass_scss/0-debug_log.scss | head -n 1

This should output:
0-debug_log.scss:2 DEBUG: Hello world

Repository Information:

GitHub Repository: atlas-web_front_end
Directory: sass_scss
File: 0-debug_log.scss

# Exercise 1: Color Variable Assignment

## Mandatory

Write a Sass file that assigns the text color `#3D3D3D` to the HTML tags `body` and `p`. Use a Sass variable for the color.

```scss
// File: sass_scss/1-color_variable.scss

// Define a Sass variable for the text color
$text-color: #3D3D3D;

body {
  color: $text-color;
}

p {
  color: $text-color;
}
```

To test the file, run the following command:
guillaume@ubuntu:~/$ sass sass_scss/1-color_variable.scss | tail -n +2

This should output:
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }

Repository Information:

GitHub Repository: atlas-web_front_end
Directory: sass_scss
File: 1-color_variable.scss

# Exercise 2: Color Variables Assignment

## Mandatory

Write a Sass file that assigns:

- The text color `#3D3D3D` to the HTML tags `body` and `p`
- The background color `#6D6D6D` to the HTML tags `body` and `h2`

Use two Sass variables for the colors.

```scss
// File: sass_scss/2-color_variables.scss

// Define Sass variables for text and background colors
$text-color: #3D3D3D;
$background-color: #6D6D6D;

body {
  color: $text-color;
  background-color: $background-color;
}

p {
  color: $text-color;
}

h2 {
  background-color: $background-color;
}
```

To test the file, run the following command:
guillaume@ubuntu:~/$ sass sass_scss/2-color_variables.scss | tail -n +2

This should output:
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }

Repository Information:

GitHub Repository: atlas-web_front_end
Directory: sass_scss
File: 2-color_variables.scss























