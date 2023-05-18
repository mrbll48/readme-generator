const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projTitle",
  },
  {
    type: "input",
    message: "Write your project description here.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your application?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license does your application use?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public Licesne v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "No License",
    ],
  },
  {
    type: "input",
    message: "Who helped you create this application?",
    name: "contribute",
  },
  {
    type: "input",
    message: "What tests were conducted on this application?",
    name: "tests",
  },
  {
    type: "input",
    message: "How can you be reached for further questions?",
    name: "furtherQuestions",
  },
  {
    type: "input",
    message: "What is your github URL?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

inquirer.prompt(questions).then((answers) => {
  const readMeContent = generateReadMe(answers);

  fs.writeFile("readme.md", readMeContent, (err) =>
    err ? console.log(err) : console.log("successfully created readme.md")
  );
});
