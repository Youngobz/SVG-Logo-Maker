const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const chalk = require('chalk');
const questions = require('./constants/questions.json');

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color, shape){
		if (shape.toLowerCase() === 'triangle') {
			this.textElement = 	`<text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
			return;
		}
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// Function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(
				chalk.red("Getting error while creating svg file Error:", err)
			);
        }
        console.log(
			chalk.green("Congratulations, you have Generated a logo.svg!")
		);
    });
}

async function init() {
	var svgString = "";
	var fileName = "logo.svg";

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

	var enteredText = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		enteredText = answers.text;
	} else {
		console.log(
			chalk.red("Invalid text! Please enter upto 3 character")
		);
        return;
	}
	
	shape = answers["shape"];
	textColor = answers['text-color'];
	shapeColor = answers['shape-color'];
	
	let createdShape;
	if (shape.toLowerCase() === "square") {
		createdShape = new Square();
	}
	else if (shape.toLowerCase() === "circle") {
		createdShape = new Circle();
	}
	else if (shape.toLowerCase() === "triangle") {
		createdShape = new Triangle();
	}
	createdShape.setColor(shapeColor);

	var svg = new Svg();
	svg.setTextElement(enteredText, textColor, shape);
	svg.setShapeElement(createdShape);
	svgString = svg.render();
	
	console.log(
		chalk.cyan("Writing shape to file...")
	);
	writeToFile(fileName, svgString); 
}

init();
