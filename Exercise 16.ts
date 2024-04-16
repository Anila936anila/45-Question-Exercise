// Information people that you found a bigger table

let guestList: Array<string> = [
"Kamran Khan Tessori",
"Zia Khan",
"Eeshah Hunain",
"Hunain Umer",
"Pervez Musharraf",
"Pukhraj Begam",
"Muhammad Sikandar",
"Quaid-e-Azam",
"Albert Einstine",
]
//step 1 Information people that you found a bigger table

for (let guest of 'guestList')  {
    console.log( `Hello, ${guest}, we found a bigger dinner table.`)

}
//step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginning: string = "Waqar"
guestList.unshift(newGuestAtBeginning)

console.log(guestList)

//Step 3. Add one guest to the middle of Array
let newGuestInMiddle: string = "Sir Ameen"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)

console.log(guestList)
// 4th Step use append () to add new guest to the end of your list

let newGuestAtEnd: string = "Sir Kashif "
guestList.push(newGuestAtEnd)
console.log(guestList)

// Final Step: Print a new set of invitation

console.log("New set of invitation message:")

for (let guest of guestList)
{
    console.log(`Dear ${guest},you are invited to dinner`)
}


