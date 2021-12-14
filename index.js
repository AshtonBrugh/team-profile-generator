const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/index.html');

const prompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "Team manager's name? (Required)",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                 }   
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Team manager's Employee ID? (Required)",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter your team manager's ID!")
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Team manager's email? (Required)",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter your manager's email!")
                }
            }

        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Team manager's office number?",
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter your manager's office number!")
                }
            }

        }

    ])
    .then(answers  => { 
        var generateHTML =  generateHTML(answers);
        writeToFile('./dist/index.HTML', generateHTML);
     })
 };

 prompts();
