/* 
Function allow to:
    1. Bundle together a lot of functionality 
    2. Easily control when it is applied

*/

function quiz() {
    let myName = prompt("Enter your name")
    let month = prompt("What month were you born in?")
    let food = prompt("What is your favorite food?")

    console.log("My name is ", myName)
    console.log("I was born in ", month)
    console.log("My favorite food is ", food)
}

const objectA = {
    name: function() {
        console.log("This is ", this) //Here the keyword this refers to the function
    }
}

const objectB = {
    name: () => {
        console.log("This is ", this) //Here keyword this refers to the window
    }
}

const print = (str="I love to print text") => {
    console.log(String(str))
}

const functionA = (f) => {
    console.log("FUNCTIONA HAS BEEN CALLED!")
    f()
}

const functionB = () => {
    console.log("FUNCTIONB HAS BEEN CALLED!")
}

const functionC = () => {
    console.log("FUNCTIONC HAS BEEN CALLED!")
}

// const greet = (person) => {
//     console.log("HELLO", person)
// }

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log("Message: ", message)
    return num * num
}