var inquirer = require('inquirer');
const generatePage = require('./src/template-page.js');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { rolePrompt, managerQ, engineerQ, internQ } = require("./src/questions.js");
const { writeFile, copyFile } = require('./src/generate-site.js');

let employees = [];

const checkRole = employee => {
    if(employee.role == 'Engineer') {
        return addEngineer();
    }
    else if(employee.role == 'Intern') {
        return addIntern();
    }
    else {
        return generatePage(employees);
    }
}

// choose role questions
const addTeam = () => {
    return inquirer
        .prompt(rolePrompt)
        .then(employee => checkRole(employee))
}

// questions for each role
const addEngineer = () => {
    return inquirer
        .prompt(engineerQ)
        .then(employee => {
            employees.push(new Engineer(employee.name, employee.id, employee.email, employee.github));
            return addTeam();
        })
}

const addIntern = () => {
    return inquirer
        .prompt(internQ)
        .then(employee => {
            employees.push(new Intern(employee.name, employee.id, employee.email, employee.school));
            return addTeam();
        })
}

inquirer
    .prompt(managerQ)
    .then(employee => {
        employees.push(new Manager(employee.name, employee.id, employee.email, employee.office));
    })
    .then(addTeam)
    // .then(generatePage(employees))
    .then(pageHTML => {
        return writeFile(pageHTML);
      })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    //   })
    //   .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    //   })
    .catch(error => {
        console.log(error);
    });