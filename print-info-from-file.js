const fs = require('fs');
const readline = require('readline');

const countries = new Map();

const countriesCount = (country) => {
    let countryCount = countries.get(country);
    if (countryCount) {
        countryCount++
        countries.set(country, countryCount);
    }else{
        countries.set(country, 1);
    }
}


const stream = readline.createInterface({
    input: fs.createReadStream('free_company_dataset.csv')
});

stream.on('error', error => {
    console.error(error);
});

stream.on('line', line => {
    const country = line.split(',')[0]
    countriesCount(country);
});

stream.on('close', () => {
    console.log(countries);
})