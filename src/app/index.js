const express = require('express');
const path = require('path');
const setupLiveReload = require('./middlewares/setup-live-reload.js');
const app = express();
const api = require('../api');
const appData = require('../../config/application.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
  setupLiveReload(app);
}

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
      title: appData.title,
      products: products.data
    });
  });
});

app.get('/*', (req, res) => {
  res.render('user/user-view', {
    user: {
      name: 'Ozymas',
      image: 'static/img/square-1.jpg',
      createdAt: '2016-08-11T01:39:09Z'
    }
  });
});

module.exports = app;
