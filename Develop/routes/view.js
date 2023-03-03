const express = require('express');
const view = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


view.use(express.static('public'));

// GET Route for retrieving all the tips
view.get('/notes/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    //readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    res.sendFile('notes.html', { root: 'public' });
  });

  module.exports = view;
