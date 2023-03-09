const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("should create an object with a name, id, email, and office number property", () => {
      const manager = new Manager("John", 1, "john@example.com", 101);
      expect(manager.name).toEqual("John");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("john@example.com");
      expect(manager.officeNumber).toEqual(101);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const manager = new Manager("John", 1, "john@example.com", 101);
      expect(manager.getRole()).toEqual("Manager");
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the office number of the manager", () => {
      const manager = new Manager("John", 1, "john@example.com", 101);
      expect(manager.getOfficeNumber()).toEqual(101);
    });
  });
});
