// create global variables
const inquirer = require('inquirer');
const fs = require('fs');
var display = [];
var output;

// create class variables
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/GenerateHTML');

// arrays of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the teammate's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the teammate's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the teammate's email:"
    }
];

const additionalQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the office number:"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Enter the GitHub username:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:"
    }
];

const managerArr = questions.concat(additionalQuestions[0]);
const engineerArr = questions.concat(additionalQuestions[1]);
const internArr = questions.concat(additionalQuestions[2]);

const addTeammateQuestion = [
    {
        type: 'list',
        name: 'addTeammate',
        message: "Want to add a new teammate?",
        choices: ['add engineer', 'add intern', 'finish build']
    }
];

// function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created HTML file!'));
}

// function that gets manager data
function addManager() {
    inquirer
        .prompt(managerArr)
        .then((answers) => {
            createCard('manager', answers);
            getTeammate();
        })
        .catch((err) => {
            console.log(err);
        })
}

// function that asks user if we want to create engineer, intern, or end program
function getTeammate() {
    inquirer
        .prompt(addTeammateQuestion)
        .then((answers) => {
            if (answers.addTeammate == 'add engineer') {
                addEngineer();
            } else if (answers.addTeammate == 'add intern') {
                addIntern();
            } else {
                writeToFile('./dist/myTeam.html', generateHTML(output));
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

// function adds intern to teammates
function addIntern() { 
    inquirer
        .prompt(internArr)
        .then((answers) => {
            createCard('intern', answers);
            getTeammate();
        })
        .catch((err) => {
            console.log(err);
        })
}

// function adds engineer to teammates
function addEngineer() { 
    inquirer
        .prompt(engineerArr)
        .then((answers) => {
            createCard('engineer', answers);
            getTeammate();
        })
        .catch((err) => {
            console.log(err);
        })
}

// function creates card everytime a new employee is created
function createCard(teammateType, data) {

    let newTeammate;
    let misc;
    let teammateEmail = `<a href="mailto:${data.email}" target="_blank">${data.email}</a>`;

    if (teammateType == 'manager') {
        newTeammate = new Manager(data.name, data.id, data.email, data.officeNumber);
        misc = 'Office Number: ' + data.officeNumber;
    } else if (teammateType == 'engineer') {
        newTeammate = new Engineer(data.name, data.id, data.email, data.gitHub);
        misc = `GitHub: <a href="https://github.com/${data.gitHub}" target="_blank">${data.gitHub}</a>`;
    } else if (teammateType == 'intern') {
        newTeammate = new Intern(data.name, data.id, data.email, data.school);
        misc = 'School: ' + data.school;
    }

    display.push(
    `<div class="col-xs-4 py-4 px-lg-4">
    <div class="card" style="width: 18rem;">
      <div class="card-header" style="background-color:#0477f7;color:white;">${data.name}<br>${newTeammate.getRole()}</div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: ${teammateEmail}</li>
              <li class="list-group-item">${misc}</li>
          </ul>
      </div>
    </div>
  `);
    return output = display.join(' ');
}

// function to initialize app
function init() {
    addManager();
}

// calls function to initialize app
init();