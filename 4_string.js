// ES6 `` :
// posso inserire variabili, funzioni, тернарные выражения
// si salvano tutti gli spazzi e a capo

// const isVisible = () => Math.random() > 0.5 // se sarà maggiore allora e true altrimenti false
// const title = 'Hello Dima'
// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''}
//   <h1>${title}</h1>
// `
// console.log(template)

// Methods ES6
const str = 'Hello'
const strWithSpaces = '    Ciao   '
console.log(str.startsWith('He')) // true
console.log(str.endsWith('lo')) // true
console.log(str.includes('el')) // true
console.log(str.repeat(3)) // HelloHelloHello
console.log(str.padStart(10)) // minimo di somboli all'inizio
console.log(str.padStart(10, '1234'))
console.log(str.padStart(2))
console.log(str.padEnd(2, '12'))
console.log(str.padEnd(8, '1234'))

console.log(strWithSpaces.trim(3)) // spazzi ai lati
console.log(strWithSpaces.trimEnd(3), '*') // spazzi ai lati
console.log(strWithSpaces.trimStart(3), '*') // spazzi ai lati
