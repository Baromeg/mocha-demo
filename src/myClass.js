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

  callAnotherFn(arg1, arg2) {
    let result = this.add(arg1, arg2)
    return result
  }

  callTheCallback(callback) {
    callback()
  }
}
// 3 - Export Class
module.exports = MyClass
