// Cities:

function describe_city(city: string, country: string = "Unknown Country"): void
{
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New Yourk"); 
//Using the default country value
describe_city("Berlin", "Germany");