# Team Profile Generator

# Demo
[Demo Video](https://drive.google.com/file/d/1wux0nQVLEylJsVU_1pI9jXsRLA40OCRK/view)

# Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [User's Guide](#users-guide)
* [Testing](#testing)


# Description
Creates a team profile html page using user input from the command line.

# Installation
1. Clone the repository.
2. Run `npm install` in the command line to install the dependancies.
3. Run `node Index.js` in the command line to start the program.

# User's Guide
As mentioned in the [Installation](#installation) instructions, run `node Index.js` to start the program. The generated `index.html`, as well as the corresponding `style.css` file, can be found in the `dist` directory (`./dist/index.html`, `./dist/style.css`).  The user is first prompted to input the team manager's information (required), and then propmpted to choose to add an engineer or an intern.  If the user wishes to stop adding team members, they may select `Cancel` to exit.  View the [Demo](#demo) for a video walkthrough of the program. (The Demo only shows examples of one of each team role, but the user may enter as many engineers and/or interns as they wish.) </br>

The following is a list of prompts for each team role:  </br>
*Note: All prompts are required and emails are run by a validation check.*

1. Manager Prompts
- Name
- ID
- Email
- Office Number

2. Engineer Prompts
- Name
- ID
- Email
- Github Username

3. Intern Prompts
- Name
- ID
- Email
- School

# Testing
Testing may be executed by following the [Installation](#installation) and then running `npm run test` to run all tests.  All test files can be found in the `./__tests__` directory.  Tests are available for the Employee, Manager, Engineer, and Intern classes with the names `Employee.test.js`, `Manager.test.js`, `Engineer.test.js`, and `Intern.test.js`, respectively. (*Notes: Testing is done through the Jest framework*)
