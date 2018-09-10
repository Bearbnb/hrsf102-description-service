require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
