const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });
});

describe("Building class", () => {
  it("should be a class", () => {
    expect(isClass(Building)).to.be.true;
  });

  it("should have properties named name, purpose, floors, and fireExit", () => {
    expect(building.hasOwnProperty("name")).to.equal(true);
    expect(building.hasOwnProperty("purpose")).to.equal(true);
    expect(building.hasOwnProperty("floors")).to.equal(true);
    expect(building.hasOwnProperty("fireExits")).to.equal(true);
  });
});

describe("The purpose of the building method", () => {
  it("should exists on the Building prototype", () => {
    expect(Building.prototype.purpose).to.exist;
  });

  it("should return the purpose of building", () => {
    const samplePurpose = "either residential, business, or recreational";
    building.purpose = samplePurpose;
    expect(building.purpose()).to.equal(samplePurpose);
  });
});

describe("The number of floors methods for building", () => {
  it("should exists on the Building prototype", () => {
    expect(Building.prototype.floors).to.exist;
  });

  it("should return the number of floors", () => {
    const sampleFloor = "2 or more";
    building.floors = sampleFloor;
    expect(building.floors()).to.equal(sampleFloor);
  });
});

describe("The number of fireExits for each building", () => {
  it("should exists on the Building prototype number of fireExits", () => {
    expect(Building.prototype.fireExits).to.exist;
  });

  it("should increase the number of fireExits by 3 for each floor", () => {
    const samplefireExits = "2 or more";
    building.fireExits = samplefireExits;
    expect(building.fireExits()).to.equal(fireExits);
    building.fireExits();
    building.fireExits();
    building.fireExits();
    expect(buidling.fireExits).to.equal(9);
  });
});
