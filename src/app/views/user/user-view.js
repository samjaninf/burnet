const moment = require('moment');
module.exports = (app, api) => {
  app.get('/*', (req, res, next) => {
    if (req.path.includes('/api/'))
      return next();
    // loads a user with given handle, striping away first character (slash)
    const handle = req.path.substring(1);
    api.service('users').find({
      query: {
        handle
      }
    })
    .then(page => {
      if (page.total > 0) {
        const user = page.data[0];
        const promises = [api.service('products').find({query: {userId: user.id}}),
                          api.service('posts').find({query: {userId: user.id}})];
        Promise.all(promises)
        .then(responses => {
          const productTotal = responses[0].total;
          const postTotal = responses[1].total;
          res.render('user/user-view', {
            user: {
              id: user.id,
              name: user.name,
              image: user.image,
              handle: user.handle,
              memberSince: moment(user.createdAt).locale(req.getLocale()).fromNow(),
              description: user.description,
              productTotal,
              postTotal
            }
          });
        })
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        });
      } else return next();
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
  });
};
