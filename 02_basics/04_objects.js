// const tinderuser = new Object(); <------------- singleton object

const tinderuser = {};  //  <-----------------------nonsingleton object

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser); 


//-------example

const regularUser = { 
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            fristname :"shreyash",
            jadhav : "jadhav "
        }
    }
}

// console.log(regularUser.fullname.userfullname.fristname);

//------------------example 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2 )

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderuser)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
