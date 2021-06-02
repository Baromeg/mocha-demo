// Import MyClass and Chai
let MyClass = require('../src/myClass')
let myObj = new MyClass()
// Assertion library Chai
let chai = require('chai')
let expect = chai.expect
// Spy library Sinon - It creates a wrapper around these methods to track its activity
let sinon = require('sinon')

// Test suit - Using describe block
describe('Test suit', () => {
  // It block - Test Case
  it('Test the add method', () => {
    expect(myObj.add(1, 2)).to.be.equal(3)
  })

  // Using spy and the assertions from sinon
  it('Spy the add method', () => {
    let spy = sinon.spy(myObj, 'add')
    let arg1 = 10,
      arg2 = 20
    myObj.callAnotherFn(arg1, arg2)
    // sinon.assert.calledTwice(spy)
    expect(spy.calledOnce).to.be.true
    expect(spy.calledWith(arg1, arg2)).to.be.true
  })

  // Spy on a dummy callback
  it('Spy the callback method', () => {
    let callback = sinon.spy()
    myObj.callTheCallback(callback)
    expect(callback.calledOnce).to.be.true
  })

  // Mocking
  it('Mock the sayHello method', () => {
    let mock = sinon.mock(myObj)
    let expectation = mock.expects('sayHello')
    expectation.exactly(1)
    expectation.withArgs('Hello World')
    myObj.callAnotherFn(10, 20)
    mock.verify()
  })
})
