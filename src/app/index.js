const express = require('express');
const path = require('path');
const i18n = require('i18n');
const app = express();
const setupLiveReload = require('./middlewares/setup-live-reload.js');
const api = require('../api');
const appData = require('../../config/application.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
  setupLiveReload(app);
}

i18n.configure({
  locales: ['en', 'pt-BR'],
  defaultLocale: appData.defaultLocale,
  directory: path.join(__dirname, '/locales')
});

app.use(i18n.init);
app.use('/static', express.static(path.join(__dirname, '../../static')));

app.locals.moment = require('moment');
app.locals.numeral = require('numeral');

// Loads supported languages
var supportedLngs = ['en', 'pt-BR'];

supportedLngs.forEach(function(lng){
  if( lng === 'en' ) return;
  var obj = require('numeral/languages/'+lng.toLowerCase());
  require('numeral').language(lng, obj);
});

require('./views/product/product-add')(app, api);
require('./views/product/product-view')(app, api);
require('./views/user/user-view')(app, api);
require('./views/home/home')(app, api);

module.exports = app;
