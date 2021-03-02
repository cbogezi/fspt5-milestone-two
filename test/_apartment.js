const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });

  describe("Apartment class", () => {
    it("should be a class", () => {
      expect(isClass(Apartment)).to.be.true;
    });

    it("should have the property number of floors", () => {
      expect(apartment.floors()).to.equal();
    });
  });
});
