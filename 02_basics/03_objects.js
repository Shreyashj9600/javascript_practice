// singleton
// object.creat

// Object literals

const MySym = Symbol("key1");

const jsuser = {
  name: "shreyash",
  "full name": "shreyash jadhav",
  [MySym]: "mykey1",
  age: 23,
  location: "satara",
  email: "shreyash@google.com",
  isLoggedIn: false,
  lastLogainDays: ["monday", "saturday"],
};

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[MySym]);

jsuser.email = "shreyash@chatgpt.com";
Object.freeze(jsuser);
jsuser.email = "shreyash@microsoft.com"
console.log(jsuser);