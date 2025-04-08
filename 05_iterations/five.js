const coding = ["js", "py", "cpp"]

coding.forEach(function x(val) {
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item,index,arr);

})

const myCode = [
    {
        name: "JavaScript",
        type: "js"
    },
    {
        name: "Python",
        type: "py"
    },
    {
        name: "Java",
        type: "java"
    }
]

myCode.forEach((item) => {
    console.log(item.name);
    console.log(item.type);
}
)