//  Transport Assignment

let distance = prompt("How far are you traveling (km): ");
if (distance > 5000 || distance < 1)
    console.log("Sorry, enter distance in between 1 to 5,000 kilometers");
let period = prompt(
    "What time of the day are you traveling, type 'N' for night, 'D' for day ");
if (period == 'd')
    period = 'D';
else if (period == 'n')
    period = 'N';
let cheapestTransport;
let trainRate = 0.06, busRate = 0.09;
let taxiDayRate = 0.79, taxiNightRate = 0.90;
let taxi, bus, train;
const curr = "EUR";

if (distance < 100)
    trainRate = null;
if (distance < 20)
    busRate = null;

train = trainRate * distance;
bus = busRate * distance;
console.log("bus and train: ", bus, train);

// Determine the taxi price based on distance
if (period == 'N')
    taxi = taxiNightRate * distance;
else if (period == 'D')
    taxi = taxiDayRate * distance;

if (bus != 0 && train != 0)
{
    if (taxi < bus && taxi < train)
        console.log(`The cheapest transport is a taxi at ${taxi}${curr} for ${distance}km`);
    else if (bus < taxi && bus < train)
        console.log(`The cheapest transport is a bus at ${bus}${curr} for ${distance}km`);
    else
        console.log(`The cheapest transport is a train at ${train}${curr} for ${distance}km`);
}
else if (bus == 0 && train != 0)
{
    if (taxi < train)
        console.log(`The cheapest transport is a taxi at ${taxi}${curr} for ${distance}km`);
    else
        console.log(`The cheapest transport is a train at ${train}${curr} for ${distance}km`);
}
else if (train == 0 && bus != 0)
{
    if (taxi < bus)
        console.log(`The cheapest transport is a taxi at ${taxi}${curr} for ${distance}km`);
    else
        console.log(`The cheapest transport is a bus at ${bus}${curr} for ${distance}km`);
}
else
    console.log(`The cheapest transport is a taxi at ${taxi}${curr} for ${distance}km`);

console.log(`Train is ${train}, taxi is ${taxi} and bus is ${bus}`);
