// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const choice = require('inquirer/lib/objects/choice');
const choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the link to your Github profile?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project!',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation!',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide how to use it!',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide instructions on how to use it!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licenses apply',
        choices: [
            {
                name: 'MIT',
                value: {
                    text: 'MIT',
                    url: "https://choosealicense.com/licenses/mit/",
                    badge: "![NPM](https://img.shields.io/npm/l/license)"
                }
            },
            {
                name: 'GNU AGPLv3',
                value: {
                    text: 'GNU AGPLv3',
                    url: "https://choosealicense.com/licenses/agpl-3.0/",
                    badge: "![NPM](https://img.shields.io/badge/GNU_AGPv3-License-orange)"
                }
            },
            {
                name: 'Mozilla',
                value: {
                    text: 'Mozilla',
                    url: "https://choosealicense.com/licenses/mpl-2.0/",
                    badge: "![NPM](https://img.shields.io/badge/Mozilla-License-orange)"

                }
            },
            {
                name: 'The Unlicense',
                value: {
                    text: 'The Unlicense',
                    url: "https://choosealicense.com/licenses/unlicense/",
                    badge: "![NPM](https://img.shields.io/badge/Unlicense-License-orange)"
                }
            }
        ]
    }
])
};
// Create a function to write README file
const writeToFile = (fileName, data) => { 
    
    return new Promise((resolve, reject) => {
        fs.writeFile ('./README.md', fileName, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: "Your file is created!"
            });
        });
    });
};

// Create a function to initialize app
function init() {
    questions()
        .then(generateMarkdown)
        .then(writeToFile)
        .catch(err => {
            console.log(err);
        });
 }

// Function call to initialize app
init();
