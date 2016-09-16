module.exports = (app, api) => {
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
};
