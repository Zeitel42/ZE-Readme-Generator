// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = [
  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
];

function renderLicenseBadge(license) {
  if (license === "None") {
    license = "";
    return license;
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  // console.log(license);
  switch (license) {
    case "Unlicense":
      licenseLink = "https://unlicense.org/";
      break;
    case "LGPL":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      "";
  }
  return licenseLink;
}
function renderLicenseSection(license) {
  if (license === "None") {
    license = "";
    return license;
  } else {
    return `
  ## <h2 id="userLicense">**License**</h2>
  ### <em>NOTICE</em>:
  This application is covered under the 
  ${license} license.  
  More info can be found here:
  ${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    testing,
    github,
    email,
    userLicense,
  } = data;

  return `
  # **${title}**

  ${renderLicenseBadge(userLicense)}
    
  ## **Purpose**
  ${description} 

  ## **Table of Contents** 
  <a href="#installation">Installation</a> \n
  <a href="#usage">Usage</a> \n
  <a href="#userLicense">License</a> \n
  <a href="#contributions">Contributions</a> \n
  <a href="#tests">Tests</a> \n
  <a href="#questions">Questions</a> 

  ## <h2 id="installation">**Installation**</h2>
  ${installation} 

  ## <h2 id="usage">**Usage**</h2>
  ${usage}

  ${renderLicenseSection(userLicense)}

  ## <h2 id="contributions">**Contributions**</h2>
  ${contributions} 

  ## <h2 id="tests">**Tests**</h2>
  ${testing} 

  ## <h2 id="questions">**Questions**</h2>
  For additional information please contact me via email: \n
  ${email} \n
  or visit my github page: \n
  https://github.com/${github}  
`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

module.exports = generateMarkdown;
