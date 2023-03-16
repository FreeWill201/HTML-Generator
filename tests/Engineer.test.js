// The below variable references the code created for the Engineer class

const Engineer = require("../lib/Engineer");

// Lines 7-16 establish the parameters to be tested in the Engineer class

describe("Engineer", () => {
  describe("constructor", () => {
    it("should create an object with a name, id, email, and github property", () => {
      const engineer = new Engineer("Bob", 3, "bob@example.com", "bobsmith");
      expect(engineer.name).toEqual("Bob");
      expect(engineer.id).toEqual(3);
      expect(engineer.email).toEqual("bob@example.com");
      expect(engineer.github).toEqual("bobsmith");
    });
  });

  // Lines 20-25 ensure the Engineer role is being properly called

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer("Bob", 3, "bob@example.com", "bobsmith");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  // Lines 29-35 ensure the Github parameter, specific to the Engineer class, is being properly called

  describe("getGithub", () => {
    it("should return the github username of the engineer", () => {
      const engineer = new Engineer("Bob", 3, "bob@example.com", "bobsmith");
      expect(engineer.getGithub()).toEqual("bobsmith");
    });
  });
});
