const Shipping = require('../models/Shipping');

module.exports = {
  async show(req, res) {
    const { shipping } = req.body;
    const shippingExists = await Shipping.findOne({ name: shipping });

    if (shippingExists) {
      return res.status(200).json(shippingExists);
    }

    return res.status(400).json({ error: 'Transportadora não encontrada' });
  },
};
