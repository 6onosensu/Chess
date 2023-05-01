import express from "express";
import path from 'path';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/chess', (req, res) => {
    res.sendFile(__dirname + '/public/chess.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});