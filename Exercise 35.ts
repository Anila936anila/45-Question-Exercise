// Animals: Think of atleast three animal

// List of animals with a common characteristic
const animals: string[] = ['cat', 'dog', 'goat'];

// printing the names of each animal using a for of loof

console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal.
console.log("\nStatements about each animal:");

for (const animal of animals) {
    if (animal === 'dog') {
        console.log(`A ${animal} is a great pet.`);
    }else if (animal === 'cat') {
        console.log(`A ${animal}would be a good companion at home.`);
    } else if (animal === 'goat') {
        console.log(`A ${animal}is an adorable pet that also give us milk.`);
    }
}

// Common characteristic.
console.log("\nWhat these animals have in common:");
console.log("Any of these animals could be a great pet!");




