// Immediately Invoked Function Expression

function connection() {
    console.log("DB connected");
}
connection();

((name) => {
    console.log(`API shown  ${name}!`);
})("Sam")