const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// check if the arr is empty
const ifEmpty = (arr) => {
  if(arr == undefined || arr.length == 0) {
    return false;
  }
  return true;
}

// filters by role
const filterRole = (employee, role) => {
  if(employee.getRole() == role) {
    return employee;
  }
}

// engineer cards
const engineersList = engineersArr => {
  if(!ifEmpty(engineersArr)) {
    return '';
  }

    return `
          <h2>Engineer Team</h2>
          <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            ${engineersArr
              .map(engineer => {
                return `
            <div class="col mb-4">
              <div class="card" style="width: 18rem;">
                <div class="card-header engineer">
                  <span class="oi oi-code"></span>
                  <p>Engineer</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target='_blank'> ${engineer.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target='_blank'> ${engineer.getGithub()}</a></li>
                </ul>
              </div>
            </div>
              `;
              })
              .join(' ')
            }
          </div>
    `;
};

// intern cards
const internList = internArr => {
  if(!ifEmpty(internArr)) {
    return '';
  }

  return `
          <h2>Intern Team</h2>
          <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            ${internArr
              .map(intern => {
                return `
            <div class="col mb-4">
              <div class="card" style="width: 18rem;">
                <div class="card-header intern">
                  <span class="oi oi-person"></span>
                  <p>Intern</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target='_blank'> ${intern.getEmail()}</a></li>
                </ul>
              </div>
            </div>
              `;
              })
              .join(' ')
            }
          </div>
  `;
};

// html page
module.exports = employeesArr => {
    const [ manager, ...employees ] = employeesArr;

    const engineers = employees.filter(employee => filterRole(employee, 'Engineer'));
    const interns = employees.filter(employee => filterRole(employee, 'Intern'));

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        My Team
      </header>
      <main>
        <div class='container'>
          <div class='row'>
            <div class="col-lg col-md col-sm-12">
              <div class="card" style="width: 18rem;">
                <div class="card-header manager">
                  <span class="oi oi-clipboard"></span>
                  <p>Manager</p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${manager.getName()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target='_blank'> ${manager.getEmail()}</a></li>
                </ul>
              </div>
            </div>
          </div>
          ${engineersList(engineers)}
          ${internList(interns)}
        </div>
      </main>
    </body>
    </html>
    `;
};