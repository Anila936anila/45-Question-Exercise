// Function to create a fruit object

function createFruit(name: string, color: string, taste: string) {
    return {
        name,
        color,
        taste,
    };
}
// Create an array of fruits
const fruit = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yelloe", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
];
// Access an invalid index
const invalidIndex = 10; 
console.log(`Fruit at index $ {invalidIndex}:`, fruit [invalidIndex]);
