// Hotel Room Assignment

let month = prompt("Which month is the month of stay").toLowerCase();
let days = parseInt(prompt("How many days are you going to spend? "))
if (day < 0 || days > 200)
    console.log("Sorry, you cannot stay more than 200 days");

if (day < 0)
    console.log(`Sorry, number of days ${days} imputed in invalid!`);

const months = ['may', 'june', 'july', 'august', 'september', 'october']

if (!(months.includes(month)))
    console.log("Sorry, use a valid month.");
if (days < 0 || days > 200)
    console.log("Sorry, the number of days entered is invalid.");

let pStudio, pApartment, discountStudio = 0, discountApartment = 0;
let qpStudio = 0, qpApartment = 0;

if (month == 'may' || month == 'october')
{
    pStudio = 50;
    pApartment = 65;

    if (days > 14)
    {
        discountStudio = 40 / 100;
        discountApartment = 10 / 100;
    }
    else if (days > 7)
        discountStudio = 5 / 100;
}
else if (month == 'june' || month == 'september')
{
    pStudio = 75.20;
    pApartment = 68.70;

    if (days > 14)
    {
        discountStudio = 20 / 100;
        discountApartment = 10 / 100;
    }
}
else if (month == 'july' || august == 'august')
{
    pStudio = 76;
    pApartment = 77;

    if (days > 14)
        discountApartment = 10 / 100;
}

qpStudio = pStudio * days -  (pStudio * days * discountStudio);
qpApartment = pApartment * days - (pApartment * days *discountApartment);

console.log(`Apartment: ${qpApartment.toFixed(2)} lv.`);
console.log(`Studio: ${qpStudio.toFixed(2)} lv.`);
