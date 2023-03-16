// The below variable references to code created for the Intern class

const Intern = require("../lib/Intern");

// Lines 7-16 establish the tested parameters for the Intern class

describe("Intern", () => {
  describe("constructor", () => {
    it("should create an object with a name, id, email, and school property", () => {
      const intern = new Intern("Jane", 2, "jane@example.com", "UCLA");
      expect(intern.name).toEqual("Jane");
      expect(intern.id).toEqual(2);
      expect(intern.email).toEqual("jane@example.com");
      expect(intern.school).toEqual("UCLA");
    });
  });

  // Lines 20-25 ensure Intern is being properly called

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("Jane", 2, "jane@example.com", "UCLA");
      expect(intern.getRole()).toEqual("Intern");
    });
  });

  // Lines 29-36 ensure the school parameter, specific to the Intern class, is being properly called and logged

  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const intern = new Intern("Jane", 2, "jane@example.com", "UCLA");
      expect(intern.getSchool()).toEqual("UCLA");
    });
  });
});
