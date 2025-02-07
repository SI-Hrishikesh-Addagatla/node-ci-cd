const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello, DevOps!');
});

app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});