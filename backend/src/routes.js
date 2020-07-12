const { Router } = require('express');

const ProductController = require('./controllers/ProductController');
const routes = new Router();

routes.get('/', ProductController.index);

module.exports = routes;
