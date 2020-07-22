const generateEmployeesList = employeesArr => {
    return `
    <section>
      <div>
        ${projectsArr
            // TODO: change the filter to filter by role titles
          .filter(({ feature }) => !feature)
            // TODO: change map values to proper role values
          .map(({ name, description, languages, link }) => {
            return `
            <div>
              <h3>${name}</h3>
              <h5>
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}"></a>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };

module.exports = templateData => {
    // destructure page data by section
    const { manager, ...employees } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio</title>
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <main>
        <div>
        ${manager}
        </div>
        ${generateEmployeesList(employees)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };

//   TODO: maybe change the generateEmployeesList to a specific role functions so each one is in their own row
    //   probably would change the destructing variables and check if some roles even exist