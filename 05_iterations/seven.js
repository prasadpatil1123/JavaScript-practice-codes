let myArr = [2,5,6,9,8,7]

// const result = myArr.map((num) => {return num*10})

// console.log(result);

let result =  myArr
                .map((num)=> {return num*10})
                .map((num)=> {return num+2})
                .filter((num) => (num >= 40));

console.log(result);
