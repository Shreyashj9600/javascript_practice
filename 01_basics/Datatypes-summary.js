//    stack (premative) , heap (non-premative)

let myYoutubename = "hiteschoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let UserOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let UserTwo = UserOne;
UserTwo.email = "shreyash@google.com"

console.log(UserOne.email);
console.log(UserTwo.email);