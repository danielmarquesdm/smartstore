const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    try {
      const products = await Product.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(404).send({ error: 'Products not found' });
    }
  },
};
