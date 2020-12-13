// ES6
class Person {
  type = 'human'

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' sta dicendo ciao!')
  }
}

const max = new Person('Max')

// console.log(max)
// console.log(max.type)
// max.greet()

// A livello di prototypes
// console.log(max.__proto__ === Person.prototype) // true

// Erediterietà
class Programmer extends Person {
  constructor(name, job) {
    super(name)
    this._job = job
  }

  get job() {
    return this._job.toUpperCase()
  }

  set job(job) {
    if (job.length < 2) {
      // throw new Error('Validation failed')
      console.log('Validation failed')
    } else {
      this._job = job
    }
  }

  greet() {
    super.greet()
    console.log('Rewritten')
  }
}

const frontend = new Programmer('Dima', 'Frontend')
// console.log(frontend)
// frontend.greet()
// console.log(frontend.job)
// frontend.job = '1'
// console.log(frontend.job)
// frontend.job = 'backend'
// console.log(frontend.job)

// Static
class Util {
  average(...args) {
    return args.reduce((acc, i) => (acc += i), 0) / args.length
  }
}

// console.log(Util.average(1, 1, 2, 3, 5, 8, 13)) // error

const util = new Util() // bisogna prima fare un instance per poter utilizzare i metodi della classe
console.log(util.average(1, 1, 2, 3, 5, 8, 13))

// con static
class UtilStatic {
  static average(...args) {
    return args.reduce((acc, i) => (acc += i), 0) / args.length
  }
}

console.log(UtilStatic.average(1, 1, 2, 3, 5, 8, 13)) // funziona
// o anche
const res = UtilStatic.average(1, 1, 2, 3, 5, 8, 13)
console.log(res)
