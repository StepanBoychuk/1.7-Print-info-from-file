const fs = require('fs');
const readline = require('readline');

const countries = {};

const stream = readline.createInterface({
    input: fs.createReadStream('free_company_dataset.csv')
});

stream.on('error', error => {
    console.error(error);
});

stream.on('line', line => {
    const country = line.split(',')[0]
    countries[country] = countries[country] ? countries[country] + 1 : 1;
});

stream.on('close', () => {
    console.log(countries);
})