let favoriteTransportation: Array<[transport: string, brand: string]> = []

favoriteTransportation.push (["Scooty" ,  "Honda"])
favoriteTransportation.push (["car"    , "Toyota"])
favoriteTransportation.push (["bicycle", "Sohrab"])
favoriteTransportation.push (["cart"   ,  "Horse"])

console.log(favoriteTransportation)

// I would like to own a HonDa scooty.

// using for each loop to print a series of statements

favoriteTransportation.forEach(([transport, brand]) =>
{console.log(`I would like to own a ${brand} ${transport}.`) }
)
 
