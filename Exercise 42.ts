

// Array of magician's name
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const item of magicians) {
        console.log(item);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians
}

// Modify the array to add  "The Great" to each magician's name
const greatMagiciansNames: string[] = makeGreat(magicianNames);

// Call the function to show the original  magician's names
console.log("Original Magicians")
show_magicians(magicianNames);

// Call the function to show the great magician's names.
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansNames);