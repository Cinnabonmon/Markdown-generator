const fs = require("fs");
// utils/generateMarkdown.js (Unsolved Starter)

// TODO: Create helper functions for handling the license section of the README.
// You will likely need:
// - A function that returns a license badge based on which license is passed in
// - A function that returns a license link for the Table of Contents
// - A function that returns the license section text
//
// If there is no license (e.g., the user selects "None"), these helpers should
// return an empty string so that nothing is displayed in the README for license.

// Example stubs:
//
// function renderLicenseBadge(license) {
//   // TODO: If there is a license, return the badge markdown.
//   // If "None", return an empty string.
// }
//
// function renderLicenseLink(license) {
//   // TODO: If there is a license, return the Table of Contents link for License.
// }
//
// function renderLicenseSection(license) {
//   // TODO: If there is a license, return the License section text.
// }

// TODO: Complete this function to generate the README markdown string
// using the data collected from inquirer.
// The generated README should include sections for:
//
// - Title
// - License badge (if any)
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License (if any)
// - Contributing
// - Tests
// - Questions (GitHub + email)
//
// Use the acceptance criteria and the professional README guide as a reference.

function getLiceneBadge(license) {}

function getLicensesText(license) {
  const licenseFiles = {
    MIT: "../licenses/MIT.txt",
    "Apache 2.0": "../licenses/Apache2.txt",
    "GPL 3.0": "../licenses/GPL3.txt",
    "BSD 3-Clause": "../licenses/BSD3.txt",
  };

  fs.readFile(licenseFiles[license], "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
}

getLicensesText("MIT");

function generateMarkdown({
  title,
  email,
  github,
  description,
  licesnse,
  installation,
  test,
  usage,
  contributing,
}) {
  // TODO: Use template literals to build the README.md content.
  // Hint: You can call your license helper functions here.

  return `# ${title}

<!-- TODO: Add license badge here -->

## Description

${data.description}

<!-- TODO: Add Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions sections -->

`;
}

// TODO: Export the generateMarkdown function so index.js can use it.
module.exports = generateMarkdown;
