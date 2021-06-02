// Import MyClass and Chai
let MyClass = require('../src/myClass')
let myObj = new MyClass()
// Assertion library Chai
let chai = require('chai')
let expect = chai.expect
// Spy library Sinon
let sinon = require('sinon')

// Test suit - Using describe block
describe('Test suit', () => {
  // It block - Test Case
  it('Test the add method', () => {
    expect(myObj.add(1, 2)).to.be.equal(3)
  })
})
