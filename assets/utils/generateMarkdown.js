// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description:
  ${data.text}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Additional Info](#github)

`;
}

module.exports = generateMarkdown;
