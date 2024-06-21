const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.send('express server!');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
