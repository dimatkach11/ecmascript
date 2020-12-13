// Map

const map = new Map([['a', 1]])

// console.log(map['a']) // undefined
// console.log(map.get('a')) // 1

map.set('b', 2).set(NaN, 'Number')
// console.log(map)
// console.log(map.get(NaN))
// // map.clear()
// console.log(map.has(42)) // false
map.set(42, 'demo')
// console.log(map.has(42)) // true
// map.delete('b')
// console.log(map.size)

// console.log(map.keys())
// console.log(map.entries())
// console.log(map.values())

// Set
const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8])
// console.log(set)
// console.log(set.size)
console.log(set.add(21))
// set.clear()
set.delete(1)
console.log(set)
console.log(set.keys())
console.log(set.values()) // uguale a keys
console.log(set.entries())
