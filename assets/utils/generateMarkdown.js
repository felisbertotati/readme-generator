//added switch for license badge

let licenseBadge = (license) => {
  let badge;
  switch (license) {
    case "Apache License 2.0":
      badge = "Apache_2.0";
      break;
    case "GNU General Public License v3.0":
      badge = "GPLv3";
      break;
    case "MIT License":
      badge = "MIT";
      break;
    case `BSD 2-Clause "Simplified" License`:
      badge = "BSD_2--Clause";
      break;
    case `BSD 3-Clause "New" or "Revised" License`:
      badge = "BSD_3--Clause";
      break;
    case "Boost Software License 1.0":
      badge = "Boost_1.0";
      Break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "CCO_1.0";
      break;
    case "Eclipse Public License 2.0":
      badge = "EPL_1.0";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "AGPL_v3";
      break;
    case "GNU General Public License v2.0":
      badge = "GPL_v2";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "LGPL_v3";
      break;
    case "Mozilla Public License 2.0":
      badge = "MPL_2.0";
      break;
    case "The Unlicense":
      badge = "Unlicense";
      break;
  }
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${badge}-blue.svg)`;
  }
  return "";
};

// Added switch for license link

let licenseLink = (link) => {
  if (link !== "None") {
    switch (link) {
      case "Apache License 2.0":
        return "https://opensource.org/licenses/Apache-2.0/";
      case "GNU General Public License v3.0":
        return "https://www.gnu.org/licenses/gpl-3.0/";
      case "MIT License":
        return "https://opensource.org/licenses/MIT";
      case `BSD 2-Clause "Simplified" License`:
        return "https://opensource.org/licenses/BSD-2-Clause";
      case `BSD 3-Clause "New" or "Revised" License`:
        return "https://opensource.org/licenses/BSD-3-Clause/";
      case "Boost Software License 1.0":
        return "https://www.boost.org/LICENSE_1_0.txt";
      case "Creative Commons Zero v1.0 Universal":
        return "http://creativecommons.org/publicdomain/zero/1.0/";
      case "Eclipse Public License 2.0":
        return "https://opensource.org/licenses/EPL-1.0";
      case "GNU Affero General Public License v3.0":
        return "https://www.gnu.org/licenses/gpl-3.0";
      case "GNU General Public License v2.0":
        return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      case "GNU Lesser General Public License v2.1":
        return "https://www.gnu.org/licenses/lgpl-3.0";
      case "Mozilla Public License 2.0":
        return "https://opensource.org/licenses/MPL-2.0";
      case "The Unlicense":
        return "http://unlicense.org/";
    }
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${licenseBadge(data.licenses)}

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
  
 ${data.licenses}

 ${licenseLink(data.licenses)}

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
