// Step 1 : Create an Array to store travel destination

let travelDestination: string[] = ["Turkey", "Makkah Mukarrama", "Maldive", "Ajmer Shareef", "Switzirland"]

//Step 2: Print your Arrey in original order.

console.log("original order:")
console.log(travelDestination)

// Step 3: Print your Array in alphabetical order without modifying the actual list.

console.log("\n Alphabetical order without modifying the actual list")
console.log([...travelDestination].sort())
