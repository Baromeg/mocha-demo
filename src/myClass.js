// 1 - Created a class
class MyClass {
  constructor() {
    console.log('Initiate')
  }
  // - Added a method that sums 2 values
  add(arg1, arg2) {
    let result
    result = arg1 + arg2
    return result
  }

  sayHello() {
    console.log('Hello')
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello()
    let result = this.add(arg1, arg2)
    return result
  }

  callTheCallback(callback) {
    callback()
  }
}
// 3 - Export Class
module.exports = MyClass
