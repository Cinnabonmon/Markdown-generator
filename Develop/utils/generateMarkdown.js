// Import filesystem library
const fs = require("fs");

// Gets license badge link based on the license provided in prompt
function getLicenseBadge(license) {
  // Returns empty string if no license was picked
  if (license === "None") return "";

  // List of links to license badges
  const licenseBadgeLinks = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause":
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  };

  // Returns badge based on license given
  return licenseBadgeLinks[license];
}

// Gets the text from the provided text files in licenses folder
function getLicensesText(license) {
  // List of the text files to be chosen
  const licenseFiles = {
    MIT: "./licenses/MIT.txt",
    "Apache 2.0": "./licenses/Apache2.txt",
    "GPL 3.0": "./licenses/GPL3.txt",
    "BSD 3-Clause": "./licenses/BSD3.txt",
  };

  // Returns the contents of the license provide and gives it to the README to be generated
  try {
    const data = fs.readFileSync(licenseFiles[license], "utf-8");
    return data;
  } catch (err) {
    console.log(err);
    return "";
  }
}

// Main generator for .md files
function generateMarkdown({
  title,
  email,
  github,
  description,
  license,
  installation,
  test,
  usage,
  contributing,
}) {
  //Cookie cutter README.md file layout with all the neccessary params provided
  return `# ${title}

${getLicenseBadge(license)}

## Description

${description}

<!-- TODO: Add Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions sections -->
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#test)
${!license === "None" ? "- [License](#license)" : ""}
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${test}

${
  license !== "None"
    ? `## License

${getLicensesText(license)}`
    : ""
}

## Questions

- Github: ${github}
- Email: ${email}

`;
}

// Exports the generateMarkdown function to be used in index.js
module.exports = generateMarkdown;
