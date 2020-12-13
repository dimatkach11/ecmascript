// function sum(a, b) {
//   return a + b
// }
// function cube(a) {
//   return a ** 3
// }

// arrow

// const sum = (a, b) => {
//   return a + b
// }
// console.log(sum(2, 3))

// // particolarità:
// // un sola riga
// const cube = (a) => a ** 3 // lambda function
//
// setTimeout(() => console.log('After 1 second'), 1000)

// Context
function log() {
  console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
  name: 'Dima',
  age: 31,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    setTimeout(function () {
      console.log(this.name + ' ' + this.age)
    }, 500)
  },
  delayLogWithSelfContext: function () {
    const self = this
    setTimeout(function () {
      console.log(self.name + ' ' + self.age)
    }, 500)
  },
  delayLogArrowFunction: function () {
    setTimeout(() => {
      console.log(this.name + ' ' + this.age)
    }, 500)
  },
  delayLogArrowArrow: () => {
    setTimeout(() => {
      console.log(this.name + ' ' + this.age)
    }, 500)
  },
}

// person.log() // this dara l'oggetto person
// console.log(global)
// person.arrowLog() // this dara un oggetto vuoto {} che in realtà linka su un oggetto global. se si lancia nel browser allora si vedra l'oggetto window.
// Questo perche quando creaiamo la funzione attraverso function, tale sintassi prende e crea il suo proprio context, nel quale esiste this che linca sul oggetto che richiama tale funzione.
// quando creaiamo un arrow function, tale funzione non possiede un context proprio e quindi la parola chiave this punta sempre sul contesto che sta sopra. Per capire meglio creiamo all'interno del'oggetto person delayLog che è una funzione function e vediamo:
person.delayLog() // undefined undefined, questo accade perchè la funzione setTimeout viene chiamata dall'oogetto global, è come se fosse global.setTimeout(...), e nel browser sara window.setTimeout(...). Global e window non hanno proprietà come name ed age e per questo e undefined undefined.
// per risolvere ci sono vari modi e uno e assegnare il context a una variabile --> self = this
person.delayLogWithSelfContext() // Dima 31
// cosi si faceva in ES5
// in ES6 in setTimeout basta mettere un arrowfunction, tale funzione no crea un suo contesto e per questo this puntera a person.
person.delayLogArrowFunction() // Dima 31
// ATTENZIONE che se dichiariamo con arrow anche la funzione genitore, essa nemmeno avra un suo context e puntera al global e non all'oggetto che la richiama.
person.delayLogArrowArrow() // undefined undefined
