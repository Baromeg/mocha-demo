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
}
// 3 - Export Class
module.exports = MyClass