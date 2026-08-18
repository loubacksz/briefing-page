const express = require('express');
const debug = require('debug')('briefing-page:express');
const app = express(); // returns a request handler function

//console.log(app);

app.get('/', (req, res) => {
    res.send('hello world');
});

debug('Express executed');
module.exports = app; // app is a function that handles http requests