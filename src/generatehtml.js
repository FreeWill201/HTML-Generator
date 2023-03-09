const fs = require("fs");
const handlebars = require("handlebars");

// Read in the Handlebars template file
const templateString = fs.readFileSync(
  "./src/team-template.handlebars",
  "utf8"
);

// Compile the Handlebars template
const template = handlebars.compile(templateString);

function generateHtml(teamMembers) {
  // Map each team member to an object containing their data and the appropriate template name
  const memberData = teamMembers.map((member) => {
    let templateName;
    switch (member.getRole()) {
      case "Manager":
        templateName = "manager-template";
        break;
      case "Engineer":
        templateName = "engineer-template";
        break;
      case "Intern":
        templateName = "intern-template";
        break;
      default:
        throw new Error(`Unknown role: ${member.getRole()}`);
    }
    return {
      data: member,
      template: templateName,
    };
  });

  // Generate the HTML for each team member using the appropriate template
  const memberHtml = memberData.map((member) => {
    const templateString = fs.readFileSync(
      `./src/${member.template}.handlebars`,
      "utf8"
    );
    const memberTemplate = handlebars.compile(templateString);
    return memberTemplate(member.data);
  });

  // Combine the HTML for each team member into a single string
  const html = memberHtml.join("\n");

  return html;
}

module.exports = generateHtml;

// Make sure handlebars templates are installed properly and implemented
