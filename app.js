const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodyParser.urlencoded({ encoded: true }));
const port = 8080;

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.error(err);

  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log(`Server is listening port ${port}`)
  });
})