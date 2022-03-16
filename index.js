const multiply = (n1, n2) => {
    console.log("Multiplying", n1, "by", n2)
    return n1 * n2
}

const double = (n) => {
    return n * 2
}

let array1 = ['a', 'b', 'c', 'd', 'e']
let array2 = [1,2,3,4,5,6,7]

const determineLength = (arr) => {
    if (arr.length > 5) {
        return "this array is long"
    }
    else {
        return "this array is short"
    }
}

const askForString = () => {
    let str = prompt("Enter a string")
    return str
}

console.log(askForString().split(""))