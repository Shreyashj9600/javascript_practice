const MyNums = [1,2,3,4]

// const myTotal = MyNums .reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

const myTotal = MyNums.reduce( (acc,currval) => (acc + currval),0 )

console.log(myTotal);