// Existing array and object
let players = ["John", "Mike", "Emily"];
let person = { name: "Alice", age: 25 };

// Create a reference to the players array
let team = players;

// Create a shallow copy of the players array
let team1 = [...players];

// Create a shallow copy of the person object
let cap1 = { ...person };

// Testing the variables
console.log(team);  // Output: ["John", "Mike", "Emily"]
console.log(team1); // Output: ["John", "Mike", "Emily"]
console.log(cap1);  // Output: { name: "Alice", age: 25 }
