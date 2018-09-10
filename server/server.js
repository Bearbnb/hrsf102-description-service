require('dotenv').config();
const path = require('path');
const express = require('express');
const queryString = require('query-string');

const { getListing } = require('../database/model.js');

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/listings', (req, res) => {
  const params = queryString.parse(req.url.replace('/listings?', ''));
  getListing(params.id, (listing) => {
    res.send(listing);
  });
});

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
