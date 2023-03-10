const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generatehtml");

const teamMembers = [];

function promptUser() {
  // Use Inquirer to prompt the user for information about the team members
  inquirer
    .prompt([
      // Prompt for the team manager's information
      // ...
      // Give the user the option to add an engineer or an intern, or to finish building the team
      // ...
    ])
    .then((answers) => {
      // For each team member that the user adds, create a new instance of the appropriate class
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);

      // Call the function to prompt for an engineer
      promptEngineer();
    })
    .catch((err) => {
      console.error(err);
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      // Prompt for the engineer's information
      // ...
      // Give the user the option to add another engineer or to finish building the team
      // ...
    ])
    .then((answers) => {
      // For each team member that the user adds, create a new instance of the appropriate class
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);

      // Check if the user wants to add another engineer
      if (answers.addAnother) {
        promptEngineer();
      } else {
        // Call the function to prompt for an intern
        promptIntern();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function promptIntern() {
  inquirer
    .prompt([
      // Prompt for the intern's information
      // ...
      // Give the user the option to add another intern or to finish building the team
      // ...
    ])
    .then((answers) => {
      // For each team member that the user adds, create a new instance of the appropriate class
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);

      // Check if the user wants to add another intern
      if (answers.addAnother) {
        promptIntern();
      } else {
        // Once the user is finished building the team, generate an HTML file that displays the team roster
        const html = generateHtml(teamMembers);

        // Write the generated HTML file to disk
        fs.writeFile("team.html", html, (err) => {
          if (err) throw err;
          console.log("Successfully generated team roster!");
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// Call the function to prompt for the team manager
promptUser();

// Code currently generates an html file
// Make sure to fully meet the specified criteria of specific prompted input
// to match up with what goes into the html file
