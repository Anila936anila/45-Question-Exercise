// Changing guest list

let guestlist: Array<string> =[
    "Kamran Khan Tessori",
    "Zia Khan",
    "Eeshah Hunain",
    "Hunain Umer", 
    "Pervez Musharraf",
    "Pukhraj Begam",
    "Muhammad Sikandar",
    "Quaid-e-Azam",
    "Albert Einstine",
    
    ];

    // step 1: print the name of person who can't make it.

    let guestHowCantMakeIt: string = "Albert Einstine"
    console.log(`${guestHowCantMakeIt} can't make it to dinner`)

    // Step 2. Replace the name of guest who can't make it.

    let NewGuest: string = "Khuwaja Mir Dard"
    let indexOfguestHowCantMakeIt: number = guestlist.indexOf(guestHowCantMakeIt)
    
    // console.log(indexOfguestHowCantMakeIt)

    if (indexOfguestHowCantMakeIt !== -1)
    {
       guestlist[indexOfguestHowCantMakeIt] = NewGuest

    }
    // console.log(guestlist[2])

    // step 3 print a second set of invitation message
    console.log("second set of invitation message:")
    guestlist.forEach((guest:string) =>
    {
        console.log(`Dear${guest}, you are invited to dinner.`)
    })

    export{guestlist}
