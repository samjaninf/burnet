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

app.get('/*', (req, res, next) => {
  if (req.path.includes('/api/'))
    return next();
  // loads a user with given handle
  const handle = req.path.substring(1);
  api.service('users').find({
    query: {
      handle
    }
  })
  .then(page => {
    if (page.total > 0) {
      const user = page.data[0];
      const promises = [api.service('products').find({query:{userId: user.id}})];
      Promise.all(promises)
      .then((responses) => {
        const productTotal = responses[0].total;
        res.render('user/user-view', {
          user: {
            id: user.id,
            name: user.name,
            image: user.image,
            memberSince: moment(user.createdAt).locale(req.getLocale()).fromNow(),
            description: user.description,
            productTotal,
            commentTotal: 15
          }
        });
      });
    } else return next();
  })
  .catch(err => {
    res.sendStatus(500);
  });
});

module.exports = app;
