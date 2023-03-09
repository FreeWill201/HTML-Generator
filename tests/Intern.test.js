const Intern = require("../lib/Intern");

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

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("Jane", 2, "jane@example.com", "UCLA");
      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const intern = new Intern("Jane", 2, "jane@example.com", "UCLA");
      expect(intern.getSchool()).toEqual("UCLA");
    });
  });
});
