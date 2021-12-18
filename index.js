const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');



var generateTopIndex =  generateHTML.generateTopHTML();
        fs.writeFileSync('./dist/index.HTML', generateTopIndex);

      
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

        },

    ])
    
    .then(answers  => { 
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        var generateManagerIndex =  generateHTML.generateManagerHTML(manager.name, manager.id, manager.email, manager.officeNumber);
        fs.appendFileSync('./dist/index.HTML', generateManagerIndex);

        const askForChoice = () => {
            
            inquirer.prompt([
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'Would you like to add an engineer, intern, or finish?',
                choices: ['Intern', 'Engineer', 'I am finished']
    
            }
    
            ]) .then(choice => {
                switch (choice.employeeChoice) {
                    case 'Intern':
                            // asks the questions
                            inquirer.prompt ([
                                {
                                    type: 'input',
                                    name: 'internName',
                                    message: "Team Intern's name? (Required)",
                                    validate: internInput => {
                                        if (internInput) {
                                            return true;
                                        } else {
                                            console.log("Please enter your intern's name!");
                                            return false;
                                         }   
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'internID',
                                    message: "Intern's Employee ID? (Required)",
                                    validate: internID => {
                                        if (internID) {
                                            return true;
                                        } else {
                                            console.log("Please enter your team manager's ID!")
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'internEmail',
                                    message: "Intern's email? (Required)",
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
                                    name: "internSchool",
                                    message: "Intern's school?",
                                    validate: internsSchool => {
                                        if (internsSchool) {
                                            return true;
                                        } else {
                                            console.log("Please enter your manager's office number!")
                                        }
                                    }
                        
                                },
                        
                            ]).then(answers => { // builds the thml
                                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
                                var generateInternIndex =  generateHTML.generateInternHTML(intern.name, intern.id, intern.email, intern.school);
                                fs.appendFileSync('./dist/index.HTML', generateInternIndex);
                                askForChoice();
                            })
                        
                        
                        break;
                    case 'Engineer':
                        inquirer.prompt ([
                            {
                                type: 'input',
                                name: 'engineerName',
                                message: "Team Engineer's name? (Required)",
                                validate: engineersName => {
                                    if (engineersName) {
                                        return true;
                                    } else {
                                        console.log("Please enter your engineer's name!");
                                        return false;
                                     }   
                                }
                            },
                            {
                                type: 'input',
                                name: 'engineerID',
                                message: "Intern's Employee ID? (Required)",
                                validate: engineersID => {
                                    if (engineersID) {
                                        return true;
                                    } else {
                                        console.log("Please enter your engineer's ID!")
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'engineerEmail',
                                message: "Engineer's email? (Required)",
                                validate: engineerEmail => {
                                    if (engineerEmail) {
                                        return true;
                                    } else {
                                        console.log("Please enter your engineer's email!")
                                    }
                                }
                    
                            },
                            {
                                type: "input",
                                name: "engineerGithub",
                                message: "Engineer's github?",
                                validate: engineersGithub => {
                                    if (engineersGithub) {
                                        return true;
                                    } else {
                                        console.log("Please enter your engineer's github!")
                                    }
                                }
                    
                            }

                        ]).then(answers => { // builds the thml
                            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
                            var generateInternIndex =  generateHTML.generateEngineerHTML(engineer.name, engineer.id, engineer.email, engineer.github);
                            fs.appendFileSync('./dist/index.HTML', generateInternIndex);
                            askForChoice();
                        })
                        
                        break;
                    case 'I am finished':
                        console.log('i am finished')
                        fs.appendFileSync('./dist/index.HTML', generateHTML.generateBottomHTML());
                        
                        break;
                }
            })
        }
        askForChoice();

    
        
     })
    
 };



 prompts();

//  const writeToFile = (fileName, data) => {
//     fs.writeFileSync(fileName, data, err => {
//         if (err) throw err
//     })
// };

//1. manager questions
//add manager object to employee array
//2. intern engineer or are you done?
//3. if intern -> ask intern questions, or if engineer > ask engineer questions
//add intern or engineer to array
//4. if done, generate HTML


