const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  // the title of the project
  {
    type: `input`,
    message: `What is your project name?`,
    name: `title`,
    validate: (yourInput) => {
      if (yourInput) {
        return true;
      } else {
        console.log(`Enter a title to continue!`);
        return false;
      }
    },
  },
  // description of the project
  {
    type: `input`,
    message: `Describe your project..`,
    name: `text`,
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log(`Enter your project description..`);
        return false;
      }
    },
  },
  // Installation
  {
    type: `input`,
    message: `How do you install your project?`,
    name: `installation`,
    validate: (yourInstallation) => {
      if (yourInstallation) {
        return true;
      } else {
        console.log(
          `Please provide your installations instruction to continue..`
        );
        return false;
      }
    },
  },
  // usage
  {
    type: `input`,
    message: `How do you preafer to demostrate your project?`,
    name: `usage`,
    validate: (userUsage) => {
      if (userUsage) {
        return true;
      } else {
        console.log(`Enter the information on how to use the project.`);
      }
    },
  },
  // License
  {
    type: `list`,
    message: `Choose a license for your project..`,
    name: `license`,
    choices: [
      { value: `Apache License 2.0` },
      { value: `GNU General Public License v3.0` },
      { value: `MIT License` },
      { value: `BSD 2-Clause "Simplified" License` },
      { value: `Boost Software License 1.0` },
      { value: `Eclipse Public License 2.0` },
      { value: `Mozilla Public License 2.0` },
    ],
    validate: (yourLicense) => {
      if (yourLicense) {
        return true;
      } else {
        console.log(`Press Space to Select a license for your project.`);
        return false;
      }
    },
  },
  //Contribution
  {
    type: `input`,
    message: `How to contribute to you project: `,
    name: `contribution`,
    validate: (contributing) => {
      if (contributing) {
        return true;
      } else {
        console.log("Please provide a way to contribute");
        return false;
      }
    },
  },
  // test
  {
    type: `input`,
    message: `Test instructions: `,
    name: `test`,
    validate: (testInstructions) => {
      if (testInstructions) {
        return true;
      } else {
        console.log("Please provide test instructions. ");
        return false;
      }
    },
  },
  //username / if you have more questions
  {
    type: `input`,
    message: `Enter your GitHub Username`,
    name: `github`,
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log(`Please enter your Github username`);
        return false;
      }
    },
  },
  //email
  {
    type: `input`,
    message: `Email`,
    name: `email`,
    validate: (yourEmail) => {
      if (yourEmail) {
        return true;
      } else {
        console.log(`Please provide your email`);
        return false;
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
