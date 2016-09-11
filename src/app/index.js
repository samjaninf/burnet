const express = require('express');
const path = require('path');
const i18n = require('i18n');
const moment = require('moment');
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

app.get('/', (req, res) => {
  api.service('products').find({
    query: {
      $limit: 5,
      featuredIndex: {
        $gte: 0
      },
      $sort: {
        featuredIndex: -1
      }
    }
  }).then(products => {
    res.render('home/home', {
      products: products.data
    });
  });
});

app.get('/*', (req, res) => {
  res.render('user/user-view', {
    user: {
      name: 'Ozymas',
      image: 'static/img/square-1.jpg',
      memberSince: moment('2016-08-11T01:39:09Z').locale(req.getLocale()).fromNow(),
      description: 'The longing you seek is not behind you, it is in front of you.'
    }
  });
});

module.exports = app;
