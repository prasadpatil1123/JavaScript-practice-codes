// function sayMyName() {
//     console.log("K");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
// }

// sayMyName()

// function addTwoNumbers(n1,n2) {
//     console.log(n1+n2);
// }
// addTwoNumbers(5,6)

// function addTwoNumbers(n1,n2) {
//     let result =n1+n2;
//     return result
// }

// const r = addTwoNumbers(5,6)

// console.log(r);
// console.log("Results are ",r);

// function loginUserMesg(username) {
//     return `${username} welcome to JavaScript code`
// }

// function loginUserMesg(username) {
//     if (!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} welcome to JavaScript code`
// }


// const login = loginUserMesg("kashi")  //---> Result :  kashi welcome to JavaScript code
// const login = loginUserMesg() // -----> Result :  undefined welcome to JavaScript code
// console.log("Result : ", login);

// function calculateCartPrice(v1,v2,...n) {
//     return n
// }
// function calculateCartPrice(...n) {
//     return n
// }
//  console.log(calculateCartPrice(10,25,60,80,125,144));
 
const user ={
    uname : "Kashi",
    prices:500
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.uname} and price is ${anyobject.prices}`);
}

// handleObject(user)

// handleObject({
//     uname:"sam",
//     prices:399
// })


const myNewArray = [245,699, 786,999]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([45,89,125,65,357]));
