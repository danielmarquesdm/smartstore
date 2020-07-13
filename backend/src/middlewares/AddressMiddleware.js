const Address = require('../classes/Address');
const AddressSchema = require('../models/Address');

module.exports = async (req, res, next) => {
  const { street, number, neighborhood, city, uf } = req.body.address;

  const address = new Address(street, number, neighborhood, city, uf);

  try {
    const addressSchema = await AddressSchema.create(address);
    return next();
  } catch {
    return res
      .status(400)
      .json({ error: 'Não foi possivel adicionar endereço' });
  }
};
