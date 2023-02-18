// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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

  ## Installation:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  
 ${data.license}

 ## Contribution:
 ${data.contribution}

 ## Test
 ${data.test}

 ## Questions

  If you have any question you can email me our find me in my GitHub:
    
     * GitHub: (https://github.com/${data.github}))
     * Email: ${data.email}




`;
}

module.exports = generateMarkdown;
