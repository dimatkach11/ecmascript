// const person = {
//   age: 26,
//   name: 'Dima',
//   'country-live': 'Italy',
//   toString: function () {
//     return Object.keys(this)
//       .filter((key) => key !== 'toString')
//       .map((key) => this[key])
//       .join(' ')
//   },
// }

// console.log(person.toString())

// ora si puo fare cosi in ES6
// const person = {
//   age: 26,
//   name: 'Dima',
//   'country-live': 'Italy',
//   toString() {
//     return Object.keys(this)
//       .filter((key) => key !== 'toString')
//       .map((key) => this[key])
//       .join(' ')
//   },
// }

// console.log(person.toString())

// possiamo creare all'interno arrow function che però non possono lavorare con this
// const person = {
//   age: 26,
//   name: 'Dima',
//   'country-live': 'Italy',
//   // non lavora con context tale metodo
//   print: () => this,
//   // lavora con il context
//   printWithContext: function () {
//     return () => this
//   },
//   // lavora con context tale metodo
//   toString() {
//     return Object.keys(this)
//       .filter((key) => key !== 'toString')
//       .filter((key) => key !== 'print')
//       .filter((key) => key !== 'printWithContext')
//       .map((key) => this[key])
//       .join(' ')
//   },
// }

// const sep = '==================================='
// console.log(person.printWithContext()(), `\n${sep}`) // this = global
// console.log(person.print(), `\n${sep}`) // this = person
// console.log(person.toString(), `\n${sep}`) // this = person

// chiavi Dinamiche
const cityField = 'city'
const job = 'Frontend'

const person = {
  [cityField + Date.now()]: 'Rome', // dinamica
  job, // equivalente a job: job se le chivi coincidono
  age: 26,
  name: 'Dima',
  'country-live': 'Italy',
  // non lavora con context tale metodo
  print: () => this,
  // lavora con il context
  printWithContext: function () {
    return () => this
  },
  // lavora con context tale metodo
  toString() {
    return Object.keys(this)
      .filter((key) => key !== 'toString')
      .filter((key) => key !== 'print')
      .filter((key) => key !== 'printWithContext')
      .map((key) => this[key])
      .join(' ')
  },
}

// console.log(person.toString())
// console.log(person)

// nuovi metodi
const first = { a: 1 }
const second = { b: 2 }

// console.log(Object.is(20, 20)) // true
// console.log(Object.assign(first, second)) // unisce gli oggetti
// console.log(first) // e anche l'oggetto first si modifica perche il metodo di prima apporta le stesse modifiche agli ogetti

// se vogliamo che non ci siano tali collegamenti ==> :
// console.log(Object.assign({}, first, second))
// console.log(first)

const obj = Object.assign({}, first, {
  c: 2,
  d: 3,
})

console.log(obj)
console.log(Object.entries(obj))
// [ [ 'a', 1 ], [ 'c', 2 ], [ 'd', 3 ] ]
console.log(Object.keys(obj))
console.log(Object.values(obj))
