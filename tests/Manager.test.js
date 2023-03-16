// Below variable references the created code for the manager class

const Manager = require("../lib/Manager");

// Lines 6-16 establish the tested parameters for the manager class

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

  // Lines 20-25 ensure that the manager role is being properly called

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const manager = new Manager("John", 1, "john@example.com", 101);
      expect(manager.getRole()).toEqual("Manager");
    });
  });

  // Lines 29-35 ensure the Office Number, specific to the Manager class is being properly called and logged

  describe("getOfficeNumber", () => {
    it("should return the office number of the manager", () => {
      const manager = new Manager("John", 1, "john@example.com", 101);
      expect(manager.getOfficeNumber()).toEqual(101);
    });
  });
});
