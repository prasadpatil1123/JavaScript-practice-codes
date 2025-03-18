// const user={
//     username : "kashi",
//     price:299,

//     welcomeMsg: function(){
//         console.log(`${this.username} , Welcome to Code`);
//         console.log(this);
//     }
// }

// // user.username
// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg()
// console.log(this);

function chai() {
    let username = "kashi"
    console.log(this.username);
}

// chai() // undefined

const Tea = function () {
    let username = "Prasad"
    console.log(this.username);

}

// Tea()

const coffee = () => {
    let customer = "kashi"
    console.log(this);
    console.log(customer);
}

// coffee()

// const addTwo = (n1,n2)=>{
//     return n1+n2
// }

// const addTwo = (n1, n2) => n1 + n2
// const addTwo = (n1, n2) => (n1 + n2)

const login =(a1,a2)=> ({username:"kashi"})

console.log(login(3, 6));
