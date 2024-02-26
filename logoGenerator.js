var inquirer = require("inquirer");
const fs = require("fs");
var Circle = require("./lib/Circle");
var Square = require("./lib/Square");
var Triangle = require("./lib/Triangle");

const questions = [
  {
    name: "shape",
    message: "Select the shape of your logo",
    type: "list",
    choices: ["circle", "square", "triangle"],
  },
  {
    name: "location",
    message: "Select the location of your text on the logo",
    type: "list",
    choices: ["top", "middle", "bottom"],
  },
  {
    name: "height",
    message: "Enter the height of your logo as a number",
    type: "text",
    when: function(answersSoFar) {
      if(answersSoFar.shape === "circle" || answersSoFar.shape === "square")
        return true;
      else
        return false;
    }
  },
  {
    name: "width",
    message: "Enter the width of your logo as a number",
    type: "text",
    when: function(answersSoFar) {
      if(answersSoFar.shape === "circle" || answersSoFar.shape === "square")
        return true;
      else
        return false;
    }
  },
  {
    name: "text",
    message: "Enter the text which will appear on your logo",
    type: "text",
  },
  {
    name: "color",
    message: "Choose the color of your logo",
    type: "list",
    choices: ["red", "blue", "green", "yellow"],
  },
];

const prompt = inquirer.createPromptModule();

function createSVG(text, color, shape, height, width, location) {
  let svgString = "";
  // Draw shape
  switch (shape) {
    case "circle":
      const c = new Circle(color, text, "white", height, width, location);
      svgString += c.render();
      break;
    case "square":
      const s = new Square(color, text, "white", height, width, location);
      svgString += s.render();
      break;
    case "triangle":
      const t = new Triangle(color, text, "white", height, width, location);
      svgString += t.render();
      break;
    default:
      break;
  }

  // Draw text

  return svgString;
}

// function to create new svg file using inquirer response and file system

// initialize, ask questions then createLogo using responses, catch any errors

prompt(questions).then((answers) => {
  let location = "";
  if (answers.location === "top") {
    location = "20%";
  } else if (answers.location === "middle") {
    location = "50%";
  } else {
    location = "90%";
  }

  const svgString = createSVG(
    answers.text,
    answers.color,
    answers.shape,
    answers.height,
    answers.width,
    location
  );
  fs.writeFile("logo.svg", svgString, () => console.log("Generated logo.svg"));

});
