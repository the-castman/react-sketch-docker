const express = require('express');
const app = express();
const currentPort = process.env.PORT || 3030;
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.listen(currentPort);

console.log('Proxy server started: listening on port: ' + currentPort);