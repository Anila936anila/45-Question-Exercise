// Pizza: Think of at least three kinds of your favorite pizza

// Define the array of favorite pizzas.

const favoritePizzas = ['Chicken Tikka', 'Lava Blast', 'BBQ Chicken'];

// Print the name of each pizzanusing a for loop.
 console.log("My favorite pizza are:");
 for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
 }

 // Print a sentence for each pizza.

console.log("\nI like these pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log("I like" + favoritePizzas[i] + "pizza.");
}

// Print an additional sentence about how much I like pizza
console.log(`\nI really love pizza!`);
