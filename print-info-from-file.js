const fs = require('fs');
const readline = require('readline');

let count = 0;

const stream = readline.createInterface({
    input: fs.createReadStream('countries-list.txt')
});

stream.on('line', line => {
    count++
    console.log(`${count}: ${line}`);
});

stream.on('error', error => {
    console.error(error);
});
