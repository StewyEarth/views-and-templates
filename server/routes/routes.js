module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', { "title": "Home" });
   });
   app.get('/products', (req, res, next) => {
      res.render('products', { "title": "Products", "products": [{ "name": "Watch", "picture": "/img/products/product1.jpg" }, { "name": "Headphones", "picture": "/img/products/product2.jpg" }, { "name": "Delete" }] });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact', { "title": "Contact" });
      res.send();
   });
};