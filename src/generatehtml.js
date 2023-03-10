const fs = require("fs");
const handlebars = require("handlebars");

// Read in the Employee Handlebars template file
const employeeTemplateString = fs.readFileSync(
  "./src/Employee-template.handlebars",
  "utf8"
);

// Read in the Engineer Handlebars template file
const engineerTemplateString = fs.readFileSync(
  "./src/Engineer-template.handlebars",
  "utf8"
);

// Read in the Intern Handlebars template file
const internTemplateString = fs.readFileSync(
  "./src/intern-template.handlebars",
  "utf8"
);

// Read in the Manager Handlebars template file
const managerTemplateString = fs.readFileSync(
  "./src/manager-template.handlebars",
  "utf8"
);

// Compile the Handlebars templates
const employeeTemplate = handlebars.compile(employeeTemplateString);
const engineerTemplate = handlebars.compile(engineerTemplateString);
const internTemplate = handlebars.compile(internTemplateString);
const managerTemplate = handlebars.compile(managerTemplateString);

function generateHtml(teamMembers) {
  // Map each team member to an object containing their data and the appropriate template name
  const memberData = teamMembers.map((member) => {
    let template;
    switch (member.getRole()) {
      case "Manager":
        template = managerTemplate;
        break;
      case "Engineer":
        template = engineerTemplate;
        break;
      case "Intern":
        template = internTemplate;
        break;
      case "Employee":
        template = employeeTemplate;
        break;
      default:
        throw new Error(`Unknown role: ${member.getRole()}`);
    }
    return {
      data: member,
      template: template,
    };
  });

  // Generate the HTML for each team member using the appropriate template
  const memberHtml = memberData.map((member) => {
    return member.template(member.data);
  });

  return memberHtml.join("\n");
}

module.exports = generateHtml;
