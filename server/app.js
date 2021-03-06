const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const { getListing } = require('../database/model.js');

app.use(cors());
app.use('/:id', express.static(path.resolve(__dirname, '../public')));

app.get('/descriptions/:id', (req, res) => {
  getListing(req.params.id, (listing) => {
    res.send(listing);
  });
});

module.exports = app;
