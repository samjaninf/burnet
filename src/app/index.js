const express = require('express');
const path = require('path');
const setupLiveReload = require('./middlewares/setup-live-reload.js');
const app = express();
const appData = require('../../config/application.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
  setupLiveReload(app);
}

app.use('/static', express.static(path.join(__dirname, '../../static')));

app.get('/', function(req, res) {
  res.render('index', {
    title: appData.title
  });
});

module.exports = app;
