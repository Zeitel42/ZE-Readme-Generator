// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const {title, description, installation, usage, contributors, github, email} = data;
  // console.log(title, link);
  return `
  # ${title} 

  ## Purpose
  ${description} 

  ## Table of Contents 
  <a href="#installation">installation</a>
  <a href="#usage">Usage</a>
  <a href="#license">License</a>
  <a href="#contributions">Contributions</a>
  <a href="#tests">Tests</a>
  <a href="#questions">Questions</a>

  ## <h2 id="installation">Installation</h2>
  ${installation} 

  ## <h2 id="usage">Usage</h2>
  ${usage} 

  ## <h2 id="license">License</h2>
  This is where the license will go

  ## <h2 id="contributions">Contributions</h2>
  ${contributors} 

  ## <h2 id="tests">Tests</h2>
  whatever this means

  ## <h2 id="questions">Questions</h2>
  For additional information please contact me via email: \n
  ${email} \n
  or visit my github page: \n
  https://github.com/${github}  
`;
}

module.exports = generateMarkdown;
