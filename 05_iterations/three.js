const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(`Each character ${greet}`);
    if(greet == " "){
        break;
    }
}

// Map 
const map = new Map()

map.set('In', "India")
map.set('Fr', "France")
map.set('Gr', "Germany")
// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
// for (const key of map) {
//     console.log(key);
    
// }
