const pageTemplate = require("./src/pageTemplate");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamArray = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team managers name?",
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number",
      },
    ])
    .then((answers) => {
      const { name, employeeID, email, officeNumber } = answers;
      const manager = new Manager(name, employeeID, email, officeNumber);
      teamArray.push(manager);
    });
};

//add interns and engineers
const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Please choose your employee's role",
          choices: ["Engineer", "Intern"],
        },
      ])
      ////////////////////////////////////////////////////////////////////////
      .then((choices) => {
        if (choices.role === "Engineer") {
          return addEngineer();
        } else if (choices.role === "Intern") {
          return addIntern();
        }
        ////////////////////////////////////////////////////////////////////////
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email",
      },
      {
        type: "input",
        name: "school",
        message: "What is your school",
      },
    ])
    .then((answers) => {
      const { name, id, email, school } = answers;
      const intern = new Intern(name, id, email, school);
      teamArray.push(intern);
    })
    .catch((error) => {
      console.log(error);
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub",
      },
    ])
    .then((answers) => {
      const { name, employeeID, email, gitHub } = answers;
      const engineer = new Engineer(name, employeeID, email, gitHub);
      teamArray.push(engineer);
    });
};

////////////////////////////////////////////////////////////////////////
addManager()
  .then(addEmployee)
  .then(writeTeam = teamArray =>  {
return fs.writeFileSync(
  "./dist/team.html", 
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Team Generator</title>
    </head>
    <body>
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${Manager.name}</div>
<div class="card-body">
<h5 class="card-title">${Manager.employeeID}</h5>
<p class="card-text">${Manager.email} ${Manager.officeNumber}</p>
</div>
</div>
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${Engineer.name}</div>
<div class="card-body">
<h5 class="card-title">${Engineer.employeeID}</h5>
<p class="card-text">${Engineer.email} ${Engineer.gitHub}</p>
</div>
</div>
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${Intern.name}</div>
<div class="card-body">
<h5 class="card-title">${Intern.employeeID}</h5>
<p class="card-text">${Intern.email} ${Intern.school}</p>
</div>
</div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>`
);})
