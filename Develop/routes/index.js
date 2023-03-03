const express = require('express');

const apiRouter = require('./notes.js');
const viewRouter = require('./view.js');

const app = express();

app.use('/api', apiRouter);

app.use('/', viewRouter);

module.exports = app;
