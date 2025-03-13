const marvel = ["Black_Panther","Spidy","Stark"]
const dc = ["Bruce", "Joker", "Flash"]

marvel.push(dc)

// console.log(marvel); // [ 'Black_Panther', 'Spidy', 'Stark', [ 'Bruce', 'Joker', 'Flash' ] ]
// console.log(marvel[3][1]); //Joker

// const avenger = marvel.concat(dc)
// console.log(avenger); // [ 'Black_Panther', 'Spidy', 'Stark', 'Bruce', 'Joker', 'Flash' ]

// const arr1 = [4,5,[65,85], 75,[45,25,[14,26,[2,3,[1,7,9]]]]]
// // const new_arr = arr1.flat(5)
// const new_arr = arr1.flat(Infinity)

// console.log(new_arr);
// console.log(Array.from("Kashi"));
// console.log(Array.isArray("Patil"));
// console.log(Array.from({name:"Kashi"}));

// console.log(typeof Array.from({name:"Kashi"}));
let s1 = 200
let s2 = 250
let s3 = 350

console.log(Array.of(s1, s2, s3));


