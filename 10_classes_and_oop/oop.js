// const user = {
//     username: "shreyash",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//     }                                                   
// }
// console.log(user.username);
// console.log(user.getUserDetails());



// const promiceOne = new Promise()
// const date = new Date()



  

user = {
    userName: "shreyash",
    loginCount : 5,
    signedIn : true,

    getUserDetiles : function () {
        // console.log("got user details from database");
        // console.log(`username: ${this.userName}`);
        // console.log(this);
    }   
}

// console.log(user.userName);
// console.log(user.getUserDetiles());



let person = {
    firstName: "rohan",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    greet: function() {
      console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
  };

//   console.log(person.firstName);
//   console.log(person.lastName);
//   console.log(person.greet());


function User(userName , loginCount , isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn    

    this.greeting = function (){
            console.log(`welcome ${this.userName}`);
    }
    return this
}

 const userOne = new User("shreyash", 5 , true)  // using "new" keyword then creat new counstroucter function call
 const userTwo = new User("chai", 7 , false)

console.log(userOne.conustructor);
// console.log(userTwo);