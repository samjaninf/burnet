const numeral = require('numeral');

module.exports = (app, api) => {
  app.get('/*/*', (req, res) => {
    if (req.path.includes('/api/'))
      return next();
    const productSlug = req.path.split('/')[2];
    api.service('products')
    .find({
      query: {
        slug: productSlug
      }
    })
    .then(page =>  {
      if (page.total > 0) {
        numeral.language(req.getLocale());
        const product = page.data[0];
        const promises = [api.service('users').get(product.userId)];
        Promise.all(promises)
        .then((results) => {
          res.render('product/product-view', {
            product: Object.assign(product, {
              price: numeral(product.price).format('0,0[.]00 $'),
              user: results[0]
            })
          });
        });
      } else return next();
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
      next(err);
    });
  });
};
