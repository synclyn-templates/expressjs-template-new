const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/stresser', (req, res) => {
    let arraySize = 134217728;  //~ 1GB
    let largeArray = new Array(arraySize).fill().map(() => Math.random());

    let sumOfElements = largeArray.reduce((acc, val) => acc + val, 0);

    let maxNumber = 100000;
    let primes = [];
    for (let i = 2; i < maxNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }

    res.send(`Hello World! Die Summe der Elemente ist: ${sumOfElements}. Gefundene Primzahlen: ${primes.length}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
