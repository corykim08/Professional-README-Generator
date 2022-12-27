// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'APACHE 2.O'){
    return "![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  if (license == 'MIT'){
    return "![license](https://img.shields.io/badge/License-MIT-blue.svg)"
  }
  if (license == 'None') {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'APACHE 2.O'){
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }
  if (license == 'MIT'){
    return "https://lbesson.mit-license.org/"
  }
  if (license == 'None') {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None'){
    return ""
  }
  else {
    return "License"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  license = data.license;
  licenseBadge = renderLicenseBadge(license)
  licenseLink = renderLicenseLink(license)
  licenseSection = renderLicenseSection(license)


  return `# ${data.title};

  ## ${licenseSection}
  ${licenseBadge} This application is covered under: ${data.license} 

  license link: ${licenseLink}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  Github user name: ${data.username}
  link: https://github.com/${data.username}

  You can reach me if you have any additional questions using below email address:
    ${data.email} 
  
  `
  
};

module.exports = generateMarkdown;
