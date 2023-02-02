const { response } = require('express');
const inquirer = require('inquirer');
const employee = require('./develop/tests/employee');
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
 <script src="./index.handlebars"></script>

const Engineer = require('./develop/tests/lib/engineer');
const Department = require('./develop/tests/lib/manager');
const Role = require('./develop/tests/employee');
const Intern = require('./develop/tests/lib/intern');


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
            
            
            .then((response) => {
            const intern = new Intern(response.InternNm, response.InternID, response.InternEmail, response.InternOff);
            teamArr.push(intern);
            choicesPrompt();
        
            })
        
            const generateCards = team => {
                const engineer = `
                    <div>
                    ${Engineer.getgithubusername}
                    ${Engineer.getName()}
                    </div>`;
                htmlArr.push(Engineer);
                console.log(htmlArr, "htmlarr")
                team.forEach(employee => {
                });
            }
            
            const choicesPrompt = () => {
            
                inquirer
                    .prompt([
                        {
                            type: 'list',
                            message: 'Would you like to add an engineer, intern, or end the team bulding process?',
                            choices: ['engineer', 'intern', 'end'],
                            name: 'choice'
            
                        }
                    ])
                    .then((response) => {
                        // run a conditional statement
                        if (response.choice === 'engineer') {
                            // run createEngineer function
                            createEngineer();
                        }
                        if (response.choice === "intern") {
                            createIntern();
                        }
                        if (response.choice === "end") {
                            generateCards();
                        }
                    })
            }

            async function getRoleId(message){
                const rows =await Role.findAll();
                const data = [];
                for(let i in rows)
                {
                    data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.title});
                }
            
                const role =await inquirer.prompt([
                    {
                        name:"roleId",
                        type:"list",
                        message:message,
                        choices:data
                    }
                ])
               
                return role.roleId;
            }
            async function getManagerId(message){
                const rows =await Employee.findAll();
                const data = [];
                for(let i in rows)
                {
                    data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.last_name+", "+rows[i].dataValues.first_name});
                }
            
                const mgr =await inquirer.prompt([
                    {
                        name:"managerId",
                        type:"list",
                        message:message,
                        choices:data
                    }
                ])
               
                return mgr.managerId;
            }
            async function getEmployeeId(message){
                const rows =await Employee.findAll();
                const data = [];
                for(let i in rows)
                {
                    data.push ({value: rows[i].dataValues.id, name:rows[i].dataValues.last_name+", "+rows[i].dataValues.first_name});
                }
            
                const emp =await inquirer.prompt([
                    {
                        name:"employeeId",
                        type:"list",
                        message:message,
                        choices:data
                    }
                ])
               
                return emp.employeeId;
            }
            async function updateEmployee ()
            {
                const empId = await getEmployeeId("Which employee's role do you want to update?");
                const roleId = await getRoleId("Which role do you want to assign to the selected employee?");
                const emp = await Employee.findByPk(empId);
            
                if(emp)
                {
                    emp.update({role_id:roleId});
                } 
                mainMenu();

                function printHTML(team){
                    fs.writeFile("index.handlebars",team, (err) => {
                      if(err) {
                        throw err;
                      };
                      console.log("Your team has been constructed!");
                    });
                    open("index.handlebars");
                    };
            }
        }
