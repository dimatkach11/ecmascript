// function compute(a, b = 20) {
//   return a + b
// }
// console.log(compute()) // NaN
// console.log(compute(10)) // 30

// come default possiamo chiamare funzioni
// const getDefault = (c) => c * 2
// function compute(a, b = getDefault(10)) {
//   return a + b
// }
// console.log(compute()) // NaN
// console.log(compute(20)) // 40

// come default possiamo chiamare funzioni che prendono parametri stessi che passiamo
// const getDefault = (c) => c * 2
// function compute(a, b = getDefault(a)) {
//   return a + b
// }
// console.log(compute()) // NaN
// console.log(compute(20)) // 60

// mettiamo default ad a
const getDefault = (c) => c * 2
function compute(a = 10, b = getDefault(a)) {
  return a + b
}
console.log(compute()) // 30
