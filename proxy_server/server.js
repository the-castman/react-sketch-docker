const express = require('express');
const app = express();
const currentPort = process.env.PORT || 3030;

app.get('/api/sayhello', (req, res) => {
    return res.json({ foo: 'bar' });
});

app.listen(currentPort);

console.log('Proxy server started: listening on port: ' + currentPort);