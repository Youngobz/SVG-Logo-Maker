# SVG Logo Generator

## Description

This is a Node.js command-line application that allows you to generate an SVG logo. The logo can have a text element and a shape element (circle, square, or triangle) with customizable colors.

### How to Use

<li>Clone this repository to your local machine.

<li>Make sure you have Node.js installed on your computer.

### Run the application with the following command:

<li> node index.js

### You will be prompted to answer a few questions to customize your logo:

<li>What text would you like? (Enter up to 3 characters)
<li>What should the text color be?
<li>What shape will you like? (Choose from Circle, Triangle, or Square)
<li>What will the shape's color be?
After providing the answers, the application will generate an SVG logo based on your choices and save it as "logo.svg" in the project directory.

### Dependencies

This application uses the following npm packages:

fs: Node.js File System module.
inquirer: A collection of common interactive command-line user interfaces.
chalk: A library for adding colors to the console output.

### Code Structure

The application is divided into three main files:

<li>index.js: Contains the main logic of the application, including the SVG class for rendering and the initialization of the logo generation process.
<li>constants/questions.json: Defines the list of questions asked to the user during the logo customization process.
<li>lib/shapes.js: Contains the Shape class and its subclasses (Circle, Square, Triangle) for rendering the shape elements of the logo.

### Troubleshooting

If you encounter the error "Invalid text! Please enter up to 3 characters" while entering the text for the logo, ensure that you are entering a text with a length between 1 and 3 characters as specified in the prompt. The application validates the input text length before proceeding with the logo generation.

### Example Output

An example output of the generated SVG logo is shown below:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#FF0000"></circle>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="#00FF00">ABC</text>
</svg>

Code:

&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"&gt;
&lt;circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#FF0000"&gt;&lt;/circle&gt;
&lt;text x="150" y="125" font-size="60" text-anchor="middle" fill="#00FF00"&gt;ABC&lt;/text&gt;
&lt;/svg&gt;

_In this example, the logo consists of a red circle with the text "ABC" in green color. The actual colors may vary based on the user's input._
