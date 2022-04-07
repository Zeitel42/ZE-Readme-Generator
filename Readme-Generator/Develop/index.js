// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./src/page-template');
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("please enter your name!");
                return false;
              }
            }
          }
    ])
    console.log(promptUser);

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
