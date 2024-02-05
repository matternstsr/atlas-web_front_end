What I have so far:

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
```answer
0-debug_log.scss:2 DEBUG: Hello world
```

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
```answer
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
```

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
```answer
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
```

Repository Information:

GitHub Repository: atlas-web_front_end
Directory: sass_scss
File: 2-color_variables.scss



add this in the same manner please and all code should have backticks before and after.



3. Nested tag
mandatory
Write a Sass file that assigns:

No margin or padding in body tags
Margin 10px to all of the p tags inside body tags
You must use nested declarations
guillaume@ubuntu:~/$ sass 3-nested_tag.scss | tail -n +2
```scss
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
```scss

guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 3-nested_tag.scss
  
0/6 pts
4. Nested class
mandatory
Write a Sass file that assigns:

Text color #3D3D3D to elements inside body tags
Text color #FF0000 to any elements of class .red inside body tags
You must use nested declarations
guillaume@ubuntu:~/$ sass 4-nested_class.scss | tail -n +2
```scss
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
```scss

guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 4-nested_class.scss
  
0/6 pts
5. Nested child
mandatory
Write a Sass file that assigns:

Text color #3D3D3D to elements inside body tags
Text color #FF0000 to any elements of class .red that are the first children of the body
You must use nested declarations
guillaume@ubuntu:~/$ sass 5-nested_child.scss | tail -n +2
```scss
body {
  color: #3D3D3D; }
  body > .red {
    color: #FF0000; }
```scss

guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 5-nested_child.scss
  
0/6 pts
6. Nested hover
mandatory
Write a Sass file that assigns:

Text color #FF0000 to button tags
When the user hovers over button tags, text color should change to #00FF00
You must use nested declarations
guillaume@ubuntu:~/$ sass 6-nested_hover.scss | tail -n +2
```scss
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
```scss
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 6-nested_hover.scss
  
0/6 pts
7. Nested and nested again
mandatory
Write a Sass file that assigns:

Font size 14px to all body tags
Font size 16px to all h1 tags inside body tags
Font size 12px to h1 tags of class .smaller inside body tags
You must use nested declarations
guillaume@ubuntu:~/$ sass 7-nested_deeper.scss | tail -n +2
```scss
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
```scss
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 7-nested_deeper.scss


8. Margin mixin
mandatory
Write a Sass file that assigns:

Margin left and right at 10px to body tags
Margin left and right at 15px to div tags
You must use a mixin
guillaume@ubuntu:~/$ sass 8-mixin_margins.scss | tail -n +2
```scss
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
```scss

guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 8-mixin_margins.scss
  
0/6 pts
9. Extended
mandatory
Write a Sass file that assigns:

Font size 12px to all tags of class .info
Text color #00FF00 to all tags of class .success and extend style of the class .info
Text color #FF0000 to all tags of class .warning and extend style of the class .info
guillaume@ubuntu:~/$ sass 9-extend_list.scss | tail -n +2

```scss
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
```scss

guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 9-extend_list.scss
  
0/7 pts
10. Import colors
mandatory
Write a Sass file that assigns:

Text color $red from 10-colors.scss to the class .red
Text color $green from 10-colors.scss to the class .green
Text color $blue from 10-colors.scss to the class .blue
You must use @import
guillaume@ubuntu:~/$ cat 10-colors.scss

```scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
guillaume@ubuntu:~/$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }

```scss
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 10-import_colors.scss
  
0/6 pts
11. For each
mandatory
Write a Sass file that creates a class for each name in the list $list-names and assigns the background image based on the name (example below):

You must use @import
You must use @each statement
guillaume@ubuntu:~/$ cat 11-photos.scss 

```scss
/* All names */
$list-names: julien john sam damian;
guillaume@ubuntu:~/$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat; }

.photo-john {
  background: image-url("photos/john.jpg") no-repeat; }

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat; }

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat; }

```scss
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 11-loop_photos.scss
  
0/6 pts
12. Loop Headers
mandatory
Write a Sass file that creates H* tags, where ‘*’ is the size of the font used.

h1 must have font size equal to 1px, h2 must have font size equal to 2px, etc.
You must create H* tags from 1 to 5
You must use @for statement
guillaume@ubuntu:~/$ sass 12-loop_header.scss | tail -n +2

```scss
h1 {
  font-size: 1px; }

h2 {
  font-size: 2px; }

h3 {
  font-size: 3px; }

h4 {
  font-size: 4px; }

h5 {
  font-size: 5px; }

```scss
guillaume@ubuntu:~/$ 
Repo:

GitHub repository: atlas-web_front_end
Directory: sass_scss
File: 12-loop_header.scss











