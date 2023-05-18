// renders a badge based on which license is chosen
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-green)`;
    case "GNU General Public License v3.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-red)`;
    case "MIT License":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-blue)`;
    case "BSD 2-Clause 'Simplified' License":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-yellow)`;
    case "BSD 3-Clause 'New' or 'Revised' License":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-FB02FF)`;
    case "Boost Software License 1.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-1D001E)`;
    case "Creative Commons Zero v1.0 Universal":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-03C5E4)`;
    case "Eclipse Public License 2.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-086A02)`;
    case "GNU Affero General Public License v3.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-6A1002)`;
    case "GNU General Public License v2.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-000000)`;
    case "GNU Lesser General Public Licesne v2.1":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-BABABA)`;
    case "Mozilla Public License 2.0":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-043676)`;
    case "The Unlicense":
      return `![Project License](https://img.shields.io/badge/License-${encodeURIComponent(
        license
      )}-DA72A0)`;
    case "No License":
      return "";
  }
}

// makes the badges a clickable link to choosealicense.com
function renderLicenseLink(license) {
  return `[${renderLicenseBadge(license)}](https://choosealicense.com)`;
}

// structure of the readme that gets generated.
const generateReadMe = ({
  projTitle,
  description,
  install,
  usage,
  license,
  contribute,
  tests,
  furtherQuestions,
  github,
  email,
}) =>
  `# ${projTitle}
${renderLicenseLink(license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description 
${description}

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributing
${contribute}

## Tests
${tests}

## Questions
${furtherQuestions}

${github}

${email}`;

module.exports = generateReadMe;
