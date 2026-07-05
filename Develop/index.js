// Imports for libraries
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// List of questions for the prompt
const questions = [
  {
    type: "input", // Type of prompt style
    name: "github", // The name of the prompt
    message: "What is your GitHub username?", // The question that gets displayed
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the project license?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation command?",
  },
  {
    type: "input",
    name: "test",
    message: "What is the test command?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
];

// Makes the README.md file and catches errors
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log("There was and error" + err)
      : console.log("File written successfully"),
  );
}

// Initialize inquirer to prompt the user for their answers
function init() {
  // Grabs the inquirer library and prompts the user with the set of questions above
  inquirer.prompt(questions).then((answers) => {
    const MarkDownData = generateMarkdown(answers);
    writeToFile("README.md", MarkDownData);
  });
}

// Call initializer function to the terminal
init();
