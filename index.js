let express = require('express');

let app = express();

let port = 5000;

app.get('/', (req, res) => res.send('Hellow World!'));

app.listen(port, (err) => {
    console.log('Running server on port ', port);
});