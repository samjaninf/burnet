module.exports = (app, api) => {
  app.get('/product', (req, res) => {
    if (req.path.includes('/api/'))
      return next();
    res.render('product/product-add');
  });
};
