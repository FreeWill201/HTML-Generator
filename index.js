// Make sure to use word wrap in VS Code to easily read my comments!
// The below code referenced other files to create the framework to allow the prompts to operate through the CLI interaction

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generatehtml");

// The below variable creates an array to be reused in the prompts to allow functionality between selected Team Members

const teamMembers = [];

// The below function, which is the only one outwardly called, sets up the main function to allow the prompts to properly run through the CLI

function promptUser() {
  // The below code uses Inquirer to prompt the user for information about the team members, Manager in this instance
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager: What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Manager: What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Manager: What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Manager: What is your office number?",
      },
    ])
    .then((answers) => {
      console.log(`Name: ${answers.name}`);
      console.log(`ID: ${answers.id}`);
      console.log(`Email: ${answers.email}`);
      console.log(`Office Number: ${answers.officeNumber}`);
      // For each team member that the user adds, create a new instance of the appropriate class
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);

      // Calls a function to allow the user to select between team members
      promptTeamMembers();
    })
    .catch((err) => {
      console.error(err);
    });
}

// Below code sets up the user interface, however basic, to select different team members

function promptTeamMembers() {
  // Below code uses Inquirer to prompt the user to add an engineer or an intern or to finish building the team
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I'm done adding team members"],
      },
    ])
    .then((answers) => {
      switch (answers.teamMemberType) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        default:
          // Once the user is finished building the team, generate an HTML file that displays the team roster
          const html = generateHtml(teamMembers);

          // Write the generated HTML file to disk
          fs.writeFile("team.html", html, (err) => {
            if (err) throw err;
            console.log("Successfully generated team roster!");
          });
          break;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// Below code sets up the parameters for the Engineer prompt

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer: What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer: What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer: What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "Engineer: What is your Github Account Name?",
      },
    ])
    .then((answers) => {
      console.log(`Name: ${answers.name}`);
      console.log(`ID: ${answers.id}`);
      console.log(`Email: ${answers.email}`);
      console.log(`Github Account: ${answers.github}`);
      // For each team member that the user adds, create a new instance of the appropriate class
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);

      promptTeamMembers();
    })
    .catch((err) => {
      console.error(err);
    });
}

// Below code sets the parameters for the Intern prompt

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern: What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "Intern: What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Intern: What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "Intern: What is your school?",
      },
    ])
    .then((answers) => {
      console.log(`Name: ${answers.name}`);
      console.log(`ID: ${answers.id}`);
      console.log(`Email: ${answers.email}`);
      console.log(`School: ${answers.school}`);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      // promptTeamMembers(); allows for the CLI menu to be recalled
      promptTeamMembers();
    })
    .catch((err) => {
      console.error(err);
    });
}

// Call the function to prompt for the team manager which will then allow for all the interacticity set up through this index.js file
promptUser();
