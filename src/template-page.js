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
            // TODO: change map values to proper role values
          .map(engineer => {
            return `
            <div class='col-3'>
              <div class="card text-center" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <div class="card-text">
                    <p>${engineer.getId()}</p>
                    <a href="${engineer.getEmail()}">${engineer.getEmail()}</a>
                    <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                  </div>
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
          <div class='col-3'>
          <div class="card text-center" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <div class="card-text">
                  <p>${intern.getId()}</p>
                  <a href="${intern.getEmail()}">${intern.getEmail()}</a>
                  <p>${intern.getSchool()}</p>
                </div>
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
          <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <div class="card-text">
                <p>${manager.getId()}</p>
                <a href="${manager.getEmail()}">${manager.getEmail()}</a>
                <p>${manager.getOfficeNumber()}</p>
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

//   TODO: maybe change the generateEmployeesList to a specific role functions so each one is in their own row
    //   probably would change the destructing variables and check if some roles even exist