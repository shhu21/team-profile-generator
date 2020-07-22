var inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/generate-site.js');
const generatePage = require('./src/template-page.js');

const questions = []

const start = () => {
    inquirer
        .prompt(questions)
        .then(employees => {
            // create the html page
            return generatePage(employees);
        })
        .then(pageHTML => {
            // write to the page
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            // copy the css file
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(error => {
            console.log(err);
        });
}