const { expect } = require('chai');
const validParens = require('../src/matching_parens');

describe('The validParens function', () => {
  it('should return true for matching parentheses', () => {
    expect(validParens("[]")).to.equal(true);
  });
  it('should return true for multiple matching parentheses', () => {
    expect(validParens("[](){}")).to.equal(true);
  });
  it('should return false for out of order parentheses', () => {
    expect(validParens(")(")).to.equal(false);
  });
  it('should return false for mismatched parentheses', () => {
    expect(validParens("](")).to.equal(false);
  });
  it('should return true for properly nested parentheses', () => {
    expect(validParens("{[]}")).to.equal(true);
  });
  it('should return false for improperly nested parentheses', () => {
    expect(validParens("({)}")).to.equal(false);
  });
});
  

