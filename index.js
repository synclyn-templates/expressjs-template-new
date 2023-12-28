const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let arraySize = 10000000; // 10 million elements
    let largeArray = new Array(arraySize).fill().map(() => Math.random());
    let sumOfElements = largeArray.reduce((acc, val) => acc + val, 0);

    res.send(largeArray);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
