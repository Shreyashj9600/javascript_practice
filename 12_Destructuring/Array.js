// Destructuring Array

// const user = ['rohit',25,'delhi']

// let [name, age, city] = user

// console.log(name);
// console.log(age);
// console.log(city);


// Using function
function user([name, age, city]) {
    console.log(name);
    console.log(age);
    console.log(city);
}

user(['rohit',25,'delhi'])

//---------

function user() {
    return ['rohit',25,'delhi']

}
let [name, age, city] = user()
console.log(age);