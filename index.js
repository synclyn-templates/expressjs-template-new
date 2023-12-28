const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/stresser', (req, res) => {
    let n = 40;
    let fibonacci = (num) => {
        if (num <= 1) return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    };
    let fibResult = fibonacci(n);


    res.send(`Die Fibonacci-Zahl an der Stelle ${n} ist: ${fibResult}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
