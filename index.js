const inquirer = require('inquirer');
const employee = require('./develop/tests/employee');


{const Employee = require('./develop/tests/employee');

    // require your classes
const employee = new employee ()  = require('./develop/tests/manager');
const Engineer = require('./develop/tests/engineer');
const Department = require('./develop/tests/manager');
const Role = require('./develop/tests/employee');
const Intern = require('./develop/tests/intern');

// manager prompts
const createManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Team manager name:',
                name: 'ManagerNm'

            },
            {
                type: 'input',
                message: 'Team manager employee ID:',
                name: 'ManagerID'
            },
            {
                type: 'input',
                message: 'Team manager email address:',
                name: 'ManagerEmail'
            },
            {
                type: 'input',
                message: 'Team manager office number:',
                name: 'ManagerOff'
            },
        ])
        .then((response) => {
            
            const manager = new Manager(response.ManagerNm, response.ManagerID, response.ManagerEmail, response.ManagerOff);
            teamArr.push(manager);
            choicesPrompt();
            
        })


        const createEngineer = () => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Team engineer name:',
                        name: 'engineerNm'
                    },
        
                    {
                        type: 'input',
                        message: 'Team engineer employee ID:',
                        name: 'engineerID'
        
                    },
        
        
                    {
                        type: "input",
                        message: "team engineer email address",
                        name: "engineeremail"
                    },
        
                    {
                        type: "input",
                        message: "team engineer github",
                        name: "engineergithub"
                    },
        
        
                ])
                .then((response) => {
                    const engineer = new Engineer(response.engineerNm, response.engineerID, response.engineeremail, response.engineergithub)
                    teamArr.push(engineer);
                    choicesPrompt();
        
        
                })
        }

        const createintern =()=>
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'Intern name:',
                name: 'internNm'
            },

            {
                type: 'input',
                message: 'Intern id:',
                name: 'internId'
            },

                {
                    type: 'input',
                    message: 'Intern email:',
                    name: 'internEmail'
                },

                {
                    type: 'input',
                    message: 'Intern school:',
                    name: 'internSchool'
                },

              
                {
                    type: 'input',
                    message: 'Intern role:',
                    name: 'internRole'
                },



                
            ])
            }
        
            constpromptlist

}