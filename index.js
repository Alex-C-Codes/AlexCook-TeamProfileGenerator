// create global variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');

// JS requirement:

// WHEN I start the application
// [x] THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// [ ] THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// [ ] THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// [ ] THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// [ ] THEN I exit the application, and the HTML is generated

// create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Enter the team manager's name:"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Enter the team manager's ID:"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the team manager's email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the office number:"
    },
    {
        type: 'list',
        name: 'addTeammate',
        message: "Want to add a new teammate?",
        choices: ['add engineer', 'add intern', 'finish build']
    }
];

// create function that checks addTeammate value, then returns prompts based on the value used
function checkTeammateType(teammateType) {
    // console.log(teammateType);
    if (teammateType === 'add engineer') {
        console.log('engineer added');
    } else if (teammateType === 'add intern') {
        console.log('intern added');
    } else {
        console.log('Team has finished being built.');
        return;
    }

    do {
        console.log('hi');
    } while (teammateType === 'add engineer' || teammateType === 'add intern');
}

// create function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created HTML file!'));
}

// create function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('myTeam.html', generateHTML(answers));
            checkTeammateType(answers.addTeammate);
        })
        .catch((err) => {
            console.log(err);
        })
}

// calls function to initialize app
init();

// GIVEN a command-line application that accepts user input

//------------
// JS requirements:

// WHEN I am prompted for my team members and their information
// [ ] THEN an HTML file is generated that displays a nicely formatted team roster based on user input

//------------
// HTML requirements:

// WHEN I click on an email address in the HTML
// [ ] THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// [ ] THEN that GitHub profile opens in a new tab

//------------
// JS requirement:

// WHEN I start the application
// [ ] THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// [ ] THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// [ ] THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// [ ] THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// [ ] THEN I exit the application, and the HTML is generated