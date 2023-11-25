const marvel_heros = ["thor", "Ironman", "Spidarman"];

const dc_heros = ["Superman", "Flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

const all_New_heros = [...marvel_heros,...dc_heros]
console.log(all_New_heros);

// ------> another example

const another_array = [1, 2, 3, [4 ,5, 6] ,7, [6, 7, [4, 5] ] ];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//----------example

console.log(Array.isArray("shreyash"));
console.log(Array.from("shreyash"));
console.log(Array.from({name: "shreyash"}));  // interesting

//--------example

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1, score2, score3));