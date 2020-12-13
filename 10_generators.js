const array = [10, 20, 30, 40]
const str = 'Hello'

// console.log(array[Symbol.iterator]) // [Function: values]
// console.log(str[Symbol.iterator]) // [Function: [Symbol.iterator]]

// const iter = array[Symbol.iterator]()
// console.log(iter) // Object [Array Iterator] {}
// // e posso chiamare next
// console.log(iter.next()) // { value: 10, done: false }
// console.log(iter.next()) // { value: 20, done: false }
// console.log(iter.next()) // { value: 30, done: false }
// console.log(iter.next()) // { value: 40, done: false }
// console.log(iter.next()) // { value: undefined, done: true }

const country = {
  values: ['ru', 'kz', 'ua', 'by'],
  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => {
        const value = this.values[i]
        i++
        return {
          done: i > this.values.length,
          value,
        }
      },
    }
  },
}

for (let item of country) {
  console.log(item)
}

// da finire argomento confuso
