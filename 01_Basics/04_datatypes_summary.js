// Primitive datatypes

// Types : String, null, boolean, BigInt, Number, Undefined, Symbol

const userId = Symbol('123') 
// const newID = Symbol('123') // false
const newID = userId  // true
console.log(userId == newID)
console.log(userId === newID)

const isLogin = false
const name = undefined
const temp = null

console.log(typeof newID)
console.log(typeof(isLogin))
console.log(typeof(name))

// References (non primitive)
// Arrays, Objects, Functions

const Heroes = ["Arjun", "Krishna", "Bhim"]

console.log(Heroes)

let mahabharat = {
    "name" : "Krishna",
    "Role" : "God",
    "Army": 0
}
console.log(mahabharat)

