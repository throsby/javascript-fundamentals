const arr = ["Liz", "Chase", "Throsby", "Ahmed"];
const filteredResults = arr.filter( func )
	
// function func(word) {
//     for (let i = 0; i <= word.length; i++){
//         for (let j = 0; j <= "ae".length; j++) {
//             if (word[i] === "ae"[j]){
//                 return "ae"[j];
//             }
//         }
//     }        
// }



function func(word,index) {
    console.log('This is the index in the array of names that the filter function is operating on ', index)
	return word.length <= 5
}

function func(word,index, arr) {
    console.log("This is the index in the array of names,", arr," that the filter function is operating on: ", `${index}. That is,`,arr[index])
	return word.length <= 5
}

console.log(filteredResults)


// function PassbyReference(obj) {
//     let tmp = obj.a;
//     obj.a = obj.b;
//     obj.b = tmp;
  
//     console.log(`Inside Pass By Reference 
//         Function -> a = ${obj.a} b = ${obj.b}`);
// }
  
// let obj = {
//     a: 10,
//     b: 20
  
// }
// console.log(`Before calling Pass By Reference 
//     Function -> a = ${obj.a} b = ${obj.b}`);
  
// PassbyReference(obj)
  
// console.log(`After calling Pass By Reference 
//     Function -> a = ${obj.a} b = ${obj.b}`);


//     function Passbyvalue(a, b) {
//         let tmp;
//         tmp = b;
//         b = a;
//         a = tmp;
//         console.log(`Inside Pass by value 
//             function -> a = ${a} b = ${b}`);
//     }
      
//     let a = 10;
//     let b = 20;
//     console.log(`Before calling Pass by value 
//             Function -> a = ${a} b = ${b}`);
      
//     Passbyvalue(a, b);
      
//     console.log(`After calling Pass by value 
//            Function -> a =${a} b = ${b}`);