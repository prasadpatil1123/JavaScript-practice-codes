const myNum =[1,2,5]

let result = myNum.reduce(function (acr, cur){
    // console.log(`acr : ${acr} and cur : ${cur}`);
    return acr + cur
},0)

// let result = myNum.reduce((acc, cur)=> acc + cur,0)

// console.log(result);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(`Total price to pay : ${priceToPay}`);

