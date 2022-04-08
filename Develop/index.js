// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generatePage = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input

const questions = () => {
    return inquirer
    .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?(Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("please enter your project's title!");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Describe your project in as much detail as you would like!(Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("please describe your project.");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'installation',
          message: 'How do you install your project(Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("How do you install this project?");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the intended usage of your project?',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("please state the usage.");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'contributors',
          message: 'Who were the contributors on this project?(Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("who worked on this project?");
              return false;
            }
          }
        }       
    ])
};
questions()
.then(answers => {
      const data = generatePage(answers); 
      fs.writeFile('./utils/README.md', data, err => {
              if (err) throw new Error(err);
        
              console.log('Page created! Check out index.html in this directory to see it!');
            });
          });


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


//////////////////////  MOCK DATA (don't forget to comment out) ////////////////////
// const mockData = {
//     title: 'balls',
//     link: 'ballshub.io',
//     description: 'has all the balls of all the balls',
//     contribution: ['some balls', 'other balls']
//   }
//   const data = generatePage(mockData);
//   fs.writeFile('./utils/README.md', data, err => {
//   if (err) throw new Error(err);
        
//   console.log('Page created! Check out index.html in this directory to see it!');
// });

  //////////////////////////////////////////////////////////////////
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
