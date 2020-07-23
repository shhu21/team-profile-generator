const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const filterRole = (employee, role) => {
  if(employee.getRole() == role) {
    return employee;
  }
}

const engineersList = engineersArr => {
    return `
    <section>
      <div class='row'>
        ${engineersArr
          .map(engineer => {
            return `
            <div class='col-lg col-med col-sm-12'>
              <div class="card text-center" style="width: 18rem;">
                <div class="card-header">
                  Engineer
                </div>
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                </ul>
                <div class="card-body">
                <a href="https://github.com/${engineer.getGithub()}" class="card-link">GitHub: ${engineer.getGithub()}</a>
                  <a href="${engineer.getEmail()}" class="card-link">Email: ${engineer.getEmail()}</a>
                </div>
              </div>
            </div>
          `;
          })
          .join('')
        }
        </div>
      </section>
    `;
};

const internList = internArr => {
  return `
  <section>
    <div class='row'>
      ${internArr
          // TODO: change map values to proper role values
        .map(intern => {
          return `
          <div class='col-lg col-med col-sm-12'>
              <div class="card text-center" style="width: 18rem;">
                <div class="card-header">
                  Intern
                </div>
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
                <div class="card-body">
                  <a href="${intern.getEmail()}" class="card-link">Email: ${intern.getEmail()}</a>
                </div>
              </div>
            </div>
        `;
        })
        .join('')
      }
      </div>
    </section>
  `;
};

module.exports = employeesArr => {
    // destructure page data by section
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
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <main>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <div class="card text-center" style="width: 18rem;">
              <div class="card-header">
                Manager
              </div>
              <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
              </ul>
              <div class="card-body">
                <a href="${manager.getEmail()}" class="card-link">Email: ${manager.getEmail()}</a>
              </div>
            </div>
          </div>
        </div>
        ${engineersList(engineers)}
        ${internList(interns)}
      </main>
    </body>
    </html>
    `;
  };