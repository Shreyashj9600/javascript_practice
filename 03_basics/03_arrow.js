const user = {
    username: "shreyash",
    price: 999,

    welcomemassage: function () {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

// user.welcomemassage()
// user.username = "hitesh"
// user.welcomemassage()

// console.log(this);


//---------
let tempWindow = {
    username: 'shreyash'
}



// console.log("25",tempWindow.username)

console.log(aConst)

const aConst = "shreyash"
let aLet = 'sdkfj'
var aVar = 'skadjfk'

// function chai() {
//     console.log(this)   

// }

// chai()

//---------arrow functions


// const chai = () => {
//     let username = "shreyash"
//     console.log(this.username)
// }
//  chai()

//   basic arrow function 

// const addTwo = (num1,num2) => {
// return num1 + num2;
// }

//const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username:"shreyash"})



// console.log(addTwo(3, 4));