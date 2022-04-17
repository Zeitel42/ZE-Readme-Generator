// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const fs = require("fs");

const generateData = require("./utils/generateMarkdown");

const { getuid } = require("process");

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your project's title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Describe your project in as much detail as you would like!(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please describe your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("How do you install this project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the intended usage of your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please state the usage.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "userLicense",
    message: "Which license would you like to add?",
    choices: ["None", "Unlicense", "GPL", "MIT", "GPL", "Proprietary"],
  },
  {
    type: "input",
    name: "contributions",
    message: "How to contribute?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("who worked on this project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "testing",
    message: "Add testing instructions(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("testing instructions for this project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message:
      "Please enter your github username for the contact section(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("your github?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email for the contact section(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("your email, ok?");
        return false;
      }
    },
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const getUserInfo = () => {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile("./utils/README.md", generateData({ ...answers }), (err) => {
      if (err) throw new Error(err);
    });
  });
};

//////////////////////  MOCK DATA (don't forget to comment out) ////////////////////
// const mockData = {
//   title: "Ramble on Rose",
//   description: "Just like Jack the Ripper",
//   installation: "Just like mojo hand",
//   usage: "Save the world",
//   contributions: "You can contribute by....",
//   userLicense: "LGPL",
//   testing: "all the testing",
//   github: "ramblinRose",
//   email: "jacktheripper@gmail.com",
// };
// const data = generateData(mockData);
// fs.writeFile("./utils/README.md", data, (err) => {
//   if (err) throw new Error(err);
//   console.log("page created");
// });

//////////////////////////////////////////////////////////////////
// // TODO: Create a function to initialize app
function init() {
  getUserInfo();
}

// // Function call to initialize app
init();
