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
  const {title, description, installation, usage, contributors} = data;
  // console.log(title, link);
  return `
  # ${title} \n

  ## Purpose
  ${description} \n

  ## Table of Contents 
  this
  will
  be the
  toc
  
  ## Installation
  ${installation} \n

  ## Usage
  ${usage} \n

  ## License
  This is where the license will go

  ## Contributions
  ${contributors} \n

  ## Tests
  whatever this means

  ## Questions
  huh?
  
`;
}

module.exports = generateMarkdown;
