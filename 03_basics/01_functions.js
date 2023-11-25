// //    Functions

// function SayMyName() {
//     console.log("s");
//     console.log("h");
//     console.log("r");
//     console.log("e");
//     console.log("y");
//     console.log("a");
//     console.log("s");
//     console.log("h");
// };

// // SayMyName ();

// //  Add to numbers

// // function addTwoNumber(Number1, Number2) {
// //     console.log(Number1 + Number2);
// // };

// function addTwoNumber(Number1, Number2) {

//         //    let result =  (Number1 + Number2);
//         //    return result
//         return Number1 + Number2 
    
// };

// const result = addTwoNumber(3, 5);

// console.log("result",result);

//----

function calculateCardPrice (val1, val2, ...num1) {
  return num1;
}

console.log(calculateCardPrice(200, 400, 500, 2000));

const user = {
    username : "shreyash",
    price : 199,
}

function handelobject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelobject(user);
handelobject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray) {
    return getArray;

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
