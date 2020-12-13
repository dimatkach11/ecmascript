// if (true) {
//   var a = 42
// }
// console.log('a from var si vede da per tutto', a) // funziona

// if (true) {
//   let b = 42
// }
// // console.log(b) // dara errore --> "b is not defined" perchè esiste solo all'interno delle graffe {} in cui è definità

// let c = 24
// if (true) {
//   let c = 42
//   console.log('c in local scope', c) // 42 local scope
// }
// console.log('c in global scope', c) // 24 global scope

// hoisting funziona solo per var
// console.log(d)
// var d = 'hoisting'
// console.log(d)

// ====
// function hoisted() {
//   age = 26
// }

// console.log(age) // errore
// let age
// console.log(age) // undefined
// hoisted()
// console.log(age) // 26
