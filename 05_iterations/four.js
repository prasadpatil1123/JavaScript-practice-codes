const myObjects ={
    java : "java",
    cpp : "CPP",
    py : "Python"
}

// for (const key in object) {
//     console.log(key);   
// }
// ReferenceError: object is not defined

for (const key in myObjects) {
//    console.log(key);
    // console.log(`${key} for description ${myObjects[key]}`);
    
}

const program = ["JS","Py","Cpp"]

for (const key in object) {
//  console.log(key);  ----> ReferenceError: object is not defined
//  console.log(program[key]);  ----> ReferenceError: object is not defined
 
}

const map = new Map()

map.set('In', "India")
map.set('Fr', "France")
map.set('Gr', "Germany")

for (const key in map) {
//    console.log(key); ----> ReferenceError: object is not defined
   
}