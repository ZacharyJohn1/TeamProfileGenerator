const pageTemplate = require('./src/pageTemplate');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern'); 
const Engineer = require('./lib/Engineer');


const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
      },
      {
        type: 'input',
        name: 'employeeID',
        message: 'What is your Employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number',
      }
    ])
  .then((answers) => {
  const { name, employeeID, email, officeNumber } = answers; 
  const manager = new Manager (name, employeeID, email, officeNumber);
  teamArray.push(manager);
})}

//add interns and engineers
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']}])
        ////////////////////////////////////////////////////////////////////////
            .then ((choices) => {if (choices === 'Engineer') { addEngineer(); }
                                else if (choices === 'Intern') { addIntern(); }
        ////////////////////////////////////////////////////////////////////////
})};

const addIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your Employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school',
      }
    ])
  .then((answers) => {
  const { name, id, email, school } = answers; 
  const intern = new Intern (name, id, email, school);
  teamArray.push(intern);
  })};

  const addEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
      },
      {
        type: 'input',
        name: 'employeeID',
        message: 'What is your Employee ID',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your office number',
      }
    ])
  .then((answers) => {
  const { name, employeeID, email, gitHub } = answers; 
  const engineer = new Engineer (name, employeeID, email, gitHub);
  teamArray.push(engineer);
  })};
////////////////////////////////////////////////////////////////////////
  addManager()
    .then(addEmployee)
    .then (teamArray => {
        return pageTemplate(teamArray);})
////////////////////////////////////////////////////////////////////////