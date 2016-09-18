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
        res.render('product/product-view', {
          product: page.data[0]
        })
        res.sendStatus(200);
      } else return next();
    });
  });
};
