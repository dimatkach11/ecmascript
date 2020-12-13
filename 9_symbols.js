// ES6
const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol === other) // false perche i simboli sono unici
// utilizzo
const obj = {
  name: 'Dima',
  demo: 'DEMO',
  [symbol]: 'meta',
}

// console.log(obj)
// console.log(obj[symbol]) // meta
// console.log(obj[other]) // undefined

// for non vede i simboli
for (let key in obj) {
  console.log(key)
}
