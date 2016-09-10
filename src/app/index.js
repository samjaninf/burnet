const express = require('express');
const path = require('path');
const app = express();
const appData = require('../../config/application.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', {
    title: appData.title
  });
});

module.exports = app;
