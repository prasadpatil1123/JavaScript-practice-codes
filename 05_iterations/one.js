const map = new Map()
map.set('B','Brazil')
map.set('R','Russia')
map.set('I','India')
map.set('C','China')
map.set('S','South Africa')

for (const key in map) {
    // console.log(key);  // No output
}
// console.log(map);
// Map(5) {
//     'B' => 'Brazil',
//     'R' => 'Russia',
//     'I' => 'India',
//     'C' => 'China',
//     'S' => 'South Africa'
//   }

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



for (const [key,value] in obj) {
// console.log(key,value);
}

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
// Output:
// js shortcut is for javaScript
// java shortcut is for Java
// cpp shortcut is for C++


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Output : 
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// output:
// js
// rb
// py
// java
// cpp

for( let index = 0; index <= 10; index++){
    const element = index;
    if (element == 5) {
        // console.log("5 is best number");
        break;
        // continue;
    }
    // console.log(element);
}

for (let i = 1; i <= 5; i++) {
    // const element = array[i];
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value J : ${j} and inner loop value of I : ${i} `);   
        // console.log(i+"*"+j+"="+ i*j);             
    }
}

let myArray = ['JavaScript','Python','MySQL']

// console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// output:
// JavaScript
// Python
// MySQL



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}