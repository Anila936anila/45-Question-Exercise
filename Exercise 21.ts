// Think of something you could store in a Typescript object.

const bouquet:  
{

    name: "Rose Delight",
    price: 500,
    description: "Beautiful arrangement of Rose flower"

}
// Define an Array of objects.

let bouquets: Array<typeof bouquet> = [];

//pushing multiple object

bouquets.push(bouquet);
bouquets.push({
 names: "Summer bliss", 
 price: 450,
 descripton: "beautiful arrangement of summer flowers"
})

    let bouquet3 = {
        name: "Red Valvet",
        price: 300,
        description: "Beautiful arrangement of res lillies"

    }

    bouquets.push(bouquet3);