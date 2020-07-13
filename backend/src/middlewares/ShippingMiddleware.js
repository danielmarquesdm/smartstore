const Shipping = require('../classes/Shipping');
const ShippingModel = require('../models/Shipping');

module.exports = async (req, res, next) => {
  const { shipping } = req.body;

  const shippingExists = await ShippingModel.findOne({ name: shipping });

  if (shippingExists) {
    return res.json(shippingExists);
  }

  const shippingCompany = new Shipping(shipping);

  try {
    const shippingModel = await ShippingModel.create(shippingCompany);
    return next();
  } catch {
    return res.status(400);
  }
};
