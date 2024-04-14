const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send("Hello World! 55555");
});

app.get('/spammmm', (req, res) => {
    console.log("test");
    console.log("test");
    console.log("test");
    console.log("test");
    console.log("test");
    console.log("test");
    
    res.send("Hello Spammmmm!");
});

app.get('/crash', (req, res) => {
    throw new Error('Crash Route Triggered');
});

app.get('/stresser', (req, res) => {
 const startTime = Date.now();
    let result = 0;
    let primeCount = 0;

    // Rechenintensive Operation: Prüfen, ob eine Zahl eine Primzahl ist
    const isPrime = (num) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false; 
        return num > 1;
    }

    // Eine Schleife, die rechenintensive Operationen ausführt
    while (true) {
        result++; // Zähler erhöhen

        // Prüfen, ob die aktuelle Zahl eine Primzahl ist
        if (isPrime(result)) {
            primeCount++;
        }

        // Berechnen der vergangenen Zeit
        const elapsedTime = (Date.now() - startTime) / 1000; // Zeit in Sekunden

        // Beenden der Schleife, wenn die Zeit zwischen 30 und 50 Sekunden liegt
        if (elapsedTime > 30 && elapsedTime < 50) {
            break;
        }
    }

    res.send(`CPU wurde für ca. ${Math.round((Date.now() - startTime) / 1000)} Sekunden ausgelastet. Anzahl der gefundenen Primzahlen: ${primeCount}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
