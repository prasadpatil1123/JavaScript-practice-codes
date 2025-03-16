// Singalton -----> creating object through constructor
// example:  Object.create

//Object Literals

const sym =Symbol("key1")

const JsUser = {
    name: "Kashi",
    age: 18,
    [sym] : "MyKey",
    email: "prasad@google.com",
    Location: "Pune",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

JsUser.email = "prasad@chatgpt.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)
// JsUser.email = "prasad@microsoft.com"
// console.log(JsUser["email"]);
// console.log(JsUser);
// console.log(typeof JsUser["sym"]);

JsUser.greeting = function(){
    console.log("Hello There THis is KASHI !!!");
}
JsUser.namaste = function(){
    console.log(`Welcome to ${JsUser.Location} my friend`);
}
console.log(JsUser.greeting());
console.log(JsUser.namaste());

// console.log(JsUser.greeting);

