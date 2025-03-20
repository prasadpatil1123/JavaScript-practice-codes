const map = new Map()
map.set('B','Brazil')
map.set('R','Russia')
map.set('I','India')
map.set('C','China')
map.set('S','South Africa')

// for (const key in map) {
//     console.log(key);
// }
// console.log(map);

const obj = {
    js:'javaScript',
    java:'Java',
    cpp:'C++'
}

for (const key in obj) {
// console.log(key);
}
// Printed:
// js
// java
// cpp



// for (const [key,value] in obj) {
// console.log(key,value);
// }

// Printed:
// js
// java
// cpp
// j s
// j a
// c p


for (const key in obj) {
// console.log(`${key} have ${value}`);
    // console.log(`${key} shortcut is for ${obj[key]}`);
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

