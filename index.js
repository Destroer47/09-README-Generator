// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: (value) => {if (value) {return true} else {return 'Please enter a project title.'}}
    },
    {
        type: 'input',
        message: 'Write a brief description about your project.',
        name: 'description',
        validate: (value) => {if (value) {return true} else {return 'Please enter a brief description.'}}
    },
    {
        type: 'checkbox',
        message: 'Please select one or more of the listed technologies below that were used. (Can add/remove technologies afterwards)',
        name: 'tech',
        choices: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'JavaScript'},
            {name: 'Node.js'},
            {name: 'Express'},
            {name: 'MySQL'},
            {name: 'Git'},
            {name: 'Heroku'},
            {name: 'AWS'},
        ],
        validate: (value) => {if (value.length > 0) {return true} else {return 'Please select one of the technologies listed'}}
    },
    {
        type: 'input',
        message: 'Write numbered step-by-step instructions on how to install your project, and seperate each numbered item with a semicolon',
        name: 'installation',
        validate: (value) => {if (value) {return true} else {return 'Please enter installation instructions'}}
    },
    {
        type: 'input',
        message: 'Write numbered step-by-step instructions on how to use your project, and seperate each numbered item with a semicolon',
        name: 'usage',
        validate: (value) => {if (value) {return true} else {return 'Please enter usage instructions.'}}
    },
    {
        type: 'input',
        message: 'Link the Github profile of all your collaborators (including yourself), and seperate with semicolons.',
        name: 'credits',
        validate: (value) => {if (value) {return true} else {return 'Please link a Github profile.'}}
    },
    {
        type: 'checkbox',
        message: 'Please select one of the listed licenses below',
        name: 'license',
        choices: [
            {name: 'MIT'},
            {name: 'GPLv2'},
            {name: 'Apache'},
            {name: 'GPLv3'},
            {name: 'BSD 3-clause'},
            {name: 'BSD 2-clause'},
            {name: 'LGPLv3'},
            {name: 'AGPLv3'},
            {name: 'Other'},
            {name: 'Unlicense'}
        ],
        validate: (value) => {if (value.length > 0) {return true} else {return 'Please select one of the licenses listed'}}
    },
    {
        type: 'input',
        message: 'Please add all project links below, and seperate with semicolons',
        name: 'links',
        validate: (value) => {if (value) {return true} else {return 'Please enter a project link.'}}
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
        validate: (value) => {if (value) {return true} else {return 'Please enter a Github Username.'}}
    },
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'email',
        validate: (value) => {if (value) {return true} else {return 'Please enter a email adress.'}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README.md file has been successfully created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    })
}
// Function call to initialize app
init();