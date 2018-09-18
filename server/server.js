require('dotenv').config();
const path = require('path');
const express = require('express');

const { getListing } = require('../database/model.js');

const app = express();
app.use('/:id', express.static(path.resolve(__dirname, '../public')));

app.get('/listings/:id', (req, res) => {
  getListing(req.params.id, (listing) => {
    res.send(listing);
  });
});

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
