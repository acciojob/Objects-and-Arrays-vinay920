const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a shallow copy of the players array
const team1 = players.slice();

// Create a shallow copy of the person object
const cap1 = { ...person };

// Test modifications
team.push("Michael"); // This will also modify the players array since team references it.
team1[0] = "Robert"; // This will not modify the original players array.
cap1.name = "Jane Smith"; // This will not modify the original person object.

console.log("Original players array:", players);
console.log("team array:", team);
console.log("team1 array:", team1);
console.log("Original person object:", person);
console.log("cap1 object:", cap1);
