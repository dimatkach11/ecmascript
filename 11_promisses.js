// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 500)
// })

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done ' + ms)
    }, ms)
  })

// delay(1000).then((data) => console.log(data))
// delay(1000)
//   .then((data) => delay(500))
//   .then((data) => console.log(data))

// async await

// ;(async function asyncDelay() {
//   const data = await delay(2000)
//   console.log(data)
// })()

// gruppo di promises con all aspetta il più lento
Promise.all([delay(1000), delay(500), delay(2000)]).then(
  (data) => console.log(data) // [ 'Done 1000', 'Done 500', 'Done 2000' ]
)
// con raise aspetta il più veloce
Promise.race([delay(1000), delay(500), delay(2000)]).then(
  (data) => console.log(data) // Done 500
)
