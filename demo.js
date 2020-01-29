class npmDemo {
  constructor (info) {
    this.name = info.name || '';
    this.age = info.age || '';
  }

  sayHello() {
    console.log(`Hello ${this.name}`)
  }

  getAge() {
    console.log(`My age is ${this.age}`)
  }
}
module.exports = npmDemo; 