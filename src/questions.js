// Question Prompts

const rolePrompt = [
    {
        type: 'list',
        name: 'role',
        message: 'Choose an employee to add: ',
        choices: ['Engineer', 'Intern', 'Cancel']
    }
];

const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the team manager: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the name of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the team manager: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the id of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the team manager: ',
        validate: input => {
            const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.test(input)) {
                return true;
            } else {
                console.log('\nPlease enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter the office number of the team manager: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the office number of the team manager.');
                return false;
            }
        }
    }
];

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the engineer: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the name of the engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the team manager: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the id of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the engineer: ',
        validate: input => {
            const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.test(input)) {
                return true;
            } else {
                console.log('\nPlease enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the github username of the engineer: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the github username of the engineer.');
                return false;
            }
        }
    }
];

const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the intern: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the name of the intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the intern: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the id of the intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the intern: ',
        validate: input => {
            const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.test(input)) {
                return true;
            } else {
                console.log('\nPlease enter a valid email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school of the intern: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter the school of the intern.');
                return false;
            }
        }
    }
];

module.exports = { rolePrompt, managerQ, engineerQ, internQ };