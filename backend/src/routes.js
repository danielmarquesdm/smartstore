const { Router } = require('express');

const ProductController = require('./controllers/ProductController');
const PaymentMiddleware = require('./middlewares/PaymentMiddleware');
const ShippingMiddleware = require('./middlewares/ShippingMiddleware');
const AddressMiddleware = require('./middlewares/AddressMiddleware');
const ShippingController = require('./controllers/ShippingController');
const ReportController = require('./controllers/ReportController');

const routes = new Router();

routes.get('/', ProductController.index);
routes.get('/pagamento', ShippingController.show);
routes.post(
  '/pagamento',
  AddressMiddleware,
  ShippingMiddleware,
  PaymentMiddleware,
  ReportController.store
);

module.exports = routes;
