module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', { "title": "Home","page":"home" });
   });
   app.get('/products', (req, res, next) => {
      res.render('products', { "title": "Products","page":"products", "products": [{ "name": "Watch", "picture": "/img/products/product1.jpg" }, { "name": "Headphones", "picture": "/img/products/product2.jpg" }, { "name": "Delete" }] });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact', { "title": "Contact","page":"contact"});
   });
};