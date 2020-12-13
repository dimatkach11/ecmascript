// simili ma differiscono dal contesto d'uso

// function average(arr) {
//   return arr.reduce((acc, i) => (acc += i), 0) / arr.length
// }
// console.log(average([10, 20, 30, 40])) // 25

// console.log(average(10, 20, 30, 40)) // errore
// come si faceva prima --> Array.from(arguments).method of array
// function average() {
//   return (
//     Array.from(arguments).reduce((acc, i) => (acc += i), 0) / arguments.length
//   )
// }
// console.log(average(10, 20, 30, 40)) // 25

// oggi si usa Rest
// function average(...args) {
//   return args.reduce((acc, i) => (acc += i), 0) / args.length
// }
// console.log(average(10, 20, 30, 40)) // 25
// // =======
// function average1(a, ...args) {
//   return args.reduce((acc, i) => (acc += i), 0) / args.length
// }
// // a = 10 e args = [20, 30, 40]
// console.log(average1(10, 20, 30, 40)) // 30

// Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(array) // [1, 2, 3, 5, 8, 13]
// console.log(...array) // 1 2 3 5 8 13

// console.log(Math.max(array)) // NaN
// console.log(Math.max(...array)) // 13
// console.log(Math.min(...array)) // 1
// prima di spread tutto funzionava cosi
// console.log(Math.max.apply(null, array)) // context = null

// possiamo coppiare
// const fib = [1, ...array]
// console.log(fib)

// function average(...args) {
//   return args.reduce((acc, i) => (acc += i), 0) / args.length
// }
// console.log(average(array)) // NaN
// console.log(average(...array)) // 5.33333333....

// Destructuring
// const array = [1, 2, 3, 5, 8, 13]
// // prima
// // const a = array[0]
// // const b = array[1]
// // ora
// const [a, b, ...c] = array
// a e b prendono i primi due valori e ...c pende il restante come array pero c = [3, 5, 8, 13]
// console.log(a, b, c) // 1 2 [ 3, 5, 8, 13 ]
// console.log(a, b, ...c) // 1 2 3 5 8 13
// possiamo anche mettere valori de default
const array1 = [1, undefined, 3, 5, 8, 13]
// const [d, e = 42, ...f] = array1
// console.log(d, e, ...f)

// saltare elementi si fa con , per ogni elemento che si salta
// const [g, , , , h] = array1 // salto tre elementi
// console.log(g, h) // 1 8

// Object
const address = {
  country: 'Italy',
  city: 'Rome',
  street: 'Via Gerolamo Gardano',
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`
  },
}

//console.log(address.concat())
// Rest
// const { city, country, street, concat } = address
// console.log(city)
// console.log(concat()) //undefined, undefined, undefined
// perchè la funioe estratta viene chiamata a nome di global che non ha i parametri county, city e street in this
// per risolvere si puo richiamare attraverso call(context) con context = adress, cosi che prendera il contesto di adress
// console.log(concat.call(address)) // Italy, Rome, Via Gerolamo Gardano
// ora this si riferisce all'oggetto address che ha i parametri

// con destructuring possiamo cambiare nome alle variabili
// const { city, country, street, concat: addressConcat } = address
// console.log(addressConcat.call(address))

// possiamo definire il default
// const {
//   city,
//   country = 'Russia',
//   cap = '00143',
//   street,
//   concat: addressConcat,
// } = address
// console.log(country) // esiste in address e quindi estrae Italy
// console.log(cap) // non esiste in address e quindi non estrae niente e prende il valore di default 00143

// Spread
// const { city, ...rest } = address
// console.log(city) // Rome
// console.log(rest) // avra il resto :
// // {
// //   country: 'Italy',
// //   street: 'Via Gerolamo Gardano',
// //   concat: [Function: concat]
// // }
// console.log({ ...rest }) // avra il resto sopra

// creare nuovi oggetti attraverso spread
const newAddress = {
  ...address,
  street: 'Via della Vasca Navale',
  cap: '00143',
}
console.log(newAddress)
