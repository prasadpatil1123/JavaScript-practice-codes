// const tinderUser = new Object() -------> singleton object
const tinderUser = {} //-------> Non singleton object

tinderUser.id = "123Abc"
tinderUser.name = "Prasad"
tinderUser.isLogedIn = true

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogedIn"));



const regulaUser = {
    email: "prasad@microsoft.com",
    fullname: {
        userfullname: {
            "firstname": "Prasad",
            "lastname": "Patil"
        }
    }
}

// console.log(regulaUser);
// console.log(regulaUser["email"]);
// console.log(regulaUser.fullname);
// console.log(regulaUser.fullname.userfullname);
// console.log(regulaUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const course = {
    coursename: "java",
    price: "1000",
    teacher: "Hitesh"
}


// console.log(course.teacher);
const { teacher } = course
// console.log(teacher);
const { teacher: sir } = course
// console.log(sir);
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]