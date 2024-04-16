// Array of magician's name
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const item of magicians) {
        console.log(item);
    }
}

//Call the function to show the magician's names
show_magicians(magicianNames);
