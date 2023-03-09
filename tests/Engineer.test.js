const Engineer = require("../lib/Engineer");

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

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer("Bob", 3, "bob@example.com", "bobsmith");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should return the github username of the engineer", () => {
      const engineer = new Engineer("Bob", 3, "bob@example.com", "bobsmith");
      expect(engineer.getGithub()).toEqual("bobsmith");
    });
  });
});
